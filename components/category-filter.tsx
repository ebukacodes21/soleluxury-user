import { Store } from "@/types";
import React, { FC } from "react";
import Filter from "./ui/filter";

type CategoryFilterProp = {
  data: Store;
};

const CategoryFilter: FC<CategoryFilterProp> = ({ data }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-24">
      <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
        <div className="hidden lg:block">
          <Filter data={data?.sizes} name="Sizes" valueKey="sizeId" />
          <Filter data={data?.colors} name="Colors" valueKey="colorId" />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
