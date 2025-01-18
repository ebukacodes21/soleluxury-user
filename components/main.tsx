"use client";
import { cn } from "@/libs/utils";
import { Category } from "@/types";
import React, { FC } from "react";
import ProductList from "./product-list";
import Container from "./ui/container";
// import Category from "./category";

type MainProp = {
  data: { category: Category };
};

const Main: FC<MainProp> = ({ data }) => {
  return (
    <Container>
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div className="space-y-4">
            <div
              className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
              style={{
                backgroundImage: `url(${data.category.billboard.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                <div className="text-gray-200 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                  {/* {data.category.billboard.label} */}
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* <Category data={data.store}/> */}

      {/* <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        {activeCategory?.products && (
          <ProductList
            title="Featured Products"
            data={activeCategory.products}
          />
        )}
      </div> */}
    </Container>
  );
};

export default Main;
