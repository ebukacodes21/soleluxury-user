import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import apiConfig from "@/services/apiconfig";
import { Product } from "@/types";
import axios from "axios";
import React, { FC } from "react";

type ProductPageProps = {
  searchParams: { productId: string; categoryId: string };
};

const page: FC<ProductPageProps> = async ({ searchParams }) => {
  const { productId, categoryId } = await searchParams; 

  let productData = null;

  try {
    const res = await axios({
      method: "GET",
      url: apiConfig.getProduct,
      params: { product_id: productId }, 
    });

    productData = res.data;
  } catch (error: any) {
    if (error.code === "ECONNREFUSED") {
      productData = { error: "Failed to connect to the server." };
    } else if (error.response) {
      productData = { error: error.response.data };
    } else {
      productData = { error: "Unknown error occurred." };
    }
  }

  let categoryProds = null;

  try {
    const res = await axios({
      method: "GET",
      url: apiConfig.getCategoryProducts,
      params: { category_id: categoryId }, 
    });

    categoryProds = res.data;
  } catch (error: any) {
    if (error.code === "ECONNREFUSED") {
      categoryProds = { error: "Failed to connect to the server." };
    } else if (error.response) {
      categoryProds = { error: error.response.data };
    } else {
      categoryProds = { error: "Unknown error occurred." };
    }
  }

  const relatedProds = categoryProds.productRes.filter((prod: Product) => {
    return prod.id != productId
  })

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={productData.productRes.images}/>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={productData.productRes}/>
            </div>
          </div>

          <hr className="my-10"/>
          <ProductList title="Related Products" data={relatedProds}/>
        </div>
      </Container>
    </div>
  );
};

export default page;
