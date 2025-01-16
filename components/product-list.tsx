import {  Store } from "@/types";
import React, { FC } from "react";

type ProductListProp = {
  title: string;
  data: any;
};

const ProductList: FC<ProductListProp> = ({ title, data }) => {
  // const products = data.store.categories.map((cat) => ({
  //   products: cat.products,
  // }));
  console.log(data)

  return (
    <div>
        <h3 className="">{title}</h3>
    </div>
  );
};

export default ProductList;
