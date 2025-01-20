import { Category, Store, Product } from "@/types";
import React, { FC, useState } from "react";
import Filter from "./ui/filter";
import ProductCard from "./ui/product-card";
import MobileFilters from "./mobile-filter";

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

    const sizeFilteredProducts = categoryProducts.filter((product) => {
      return selectedSizeId ? product.size.id === selectedSizeId : true;
    });

    const colorFilteredProducts = sizeFilteredProducts.filter((product) => {
      return selectedColorId ? product.color.id === selectedColorId : true;
    });

    return colorFilteredProducts;
  };

  // Handle size filter selection
  const handleSizeFilter = (sizeId: string) => {
    setSelectedSizeId(sizeId === selectedSizeId ? null : sizeId); // Toggle the filter off if already selected
  };

  // Handle color filter selection
  const handleColorFilter = (colorId: string) => {
    setSelectedColorId(colorId === selectedColorId ? null : colorId); // Toggle the filter off if already selected
  };

  const filteredProducts = filterProducts(category, store.products);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-24 flex flex-col lg:flex-row gap-8">
      {/* Filter Section */}
      <div className="lg:w-1/4 p-6 sticky top-24">
        <MobileFilters
          sizes={store.sizes}
          colors={store.colors}
          selectedSizeId={selectedSizeId}
          selectedColorId={selectedColorId}
          handleSizeFilter={handleSizeFilter}
          handleColorFilter={handleColorFilter}
        />
        <div className="mb-8 hidden md:block">
          <Filter
            data={store?.sizes}
            name="Sizes"
            valueKey="sizeId"
            onClick={handleSizeFilter}
            selectedValue={selectedSizeId}
          />
          <Filter
            data={store?.colors}
            name="Colors"
            valueKey="colorId"
            onClick={handleColorFilter}
            selectedValue={selectedColorId}
          />
        </div>
      </div>

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
    </div>
  );
};

export default CategoryFilter;
