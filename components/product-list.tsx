import { Product } from "@/types";
import React, { FC } from "react";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

type ProductListProp = {
  title: string;
  data: Product[];
};

const ProductList: FC<ProductListProp> = ({ title, data }) => {
  if (data.length === 0) return <NoResults />;

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} data={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
