"use client";
import { Category, Store } from "@/types";
import React, { FC } from "react";
import Container from "./ui/container";
import CategoryFilter from "./category-filter";
import CateList from "./cate-list";

type CategoryProp = {
  data: { store: Store; category: Category };
};

const CategoryComponent: FC<CategoryProp> = ({ data }) => {
  const { store, category } = data;
  
  return (
    <Container>
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <CateList data={store.categories} />
        <div className="space-y-4 mt-2">
          <div
            className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
            style={{
              backgroundImage: `url(${category?.billboard?.image_url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="text-gray-200 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                {/* {category?.billboard?.label} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoryFilter data={{ category, store}} />
    </Container>
  );
};

export default CategoryComponent;
