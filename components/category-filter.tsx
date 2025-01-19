import { Category, Store, Product } from "@/types";
import React, { FC, useState } from "react";
import Filter from "./ui/filter";
import ProductCard from "./ui/product-card";

type CategoryFilterProp = {
  data: { category: Category; store: Store };
};

const CategoryFilter: FC<CategoryFilterProp> = ({ data }) => {
  const { category, store } = data;

  // State for selected filters
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  // Filter the products based on the selected category, size, and color
  const filterProducts = (category: Category, products: Product[]) => {
    const categoryProducts = products.filter(
      (product) => product.category.id === category.id
    );

    // Then filter by size if a size filter is selected
    const sizeFilteredProducts = categoryProducts.filter((product) => {
      const sizeMatch = selectedSizeId
        ? product.size.id === selectedSizeId
        : true;
      return sizeMatch;
    });

    // Then filter by color if a color filter is selected
    const colorFilteredProducts = sizeFilteredProducts.filter((product) => {
      const colorMatch = selectedColorId
        ? product.color.id === selectedColorId
        : true;
      return colorMatch;
    });

    return colorFilteredProducts;
  };

  // Handle size filter selection
  const handleSizeFilter = (sizeId: string) => {
    setSelectedSizeId(sizeId === selectedSizeId ? null : sizeId);
  };

  // Handle color filter selection
  const handleColorFilter = (colorId: string) => {
    setSelectedColorId(colorId === selectedColorId ? null : colorId);
  };

  // Get the filtered list of products for the selected category
  const filteredProducts = filterProducts(category, store.products);

  return (
<div className="px-4 sm:px-6 lg:px-8 pb-24 flex flex-col lg:flex-row gap-8">
  {/* Product Grid */}
  <div className="lg:flex-1">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <ProductCard data={product} />
        </div>
      ))}
    </div>
  </div>

  {/* Filter Section */}
  <div className="lg:w-1/4 bg-white rounded-lg shadow-lg p-6 sticky top-24">
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Filters</h3>
      <Filter
        data={store?.sizes}
        category={category}
        name="Sizes"
        valueKey="sizeId"
        onClick={handleSizeFilter}
        selectedValue={selectedSizeId}
      />
      <Filter
        data={store?.colors}
        category={category}
        name="Colors"
        valueKey="colorId"
        onClick={handleColorFilter}
        selectedValue={selectedColorId}
      />
    </div>
  </div>
</div>

  );
};

export default CategoryFilter;
