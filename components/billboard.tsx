"use client";
import { cn } from "@/libs/utils";
import { Store } from "@/types";
import React, { FC, useState } from "react";
import ProductList from "./product-list";

type BillboardProp = {
  data: { store: Store };
};

const BillBoard: FC<BillboardProp> = ({ data }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
    data.store.categories[0]?.id || null
  );

  const categories = data.store.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    active: activeCategoryId === cat.id,
    billboard: cat.billboard,
    products: cat.products
  }));

  return (
    <>
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black cursor-pointer",
                cat.active ? "text-black" : "text-neutral-500"
              )}
            >
              {cat.name}
            </div>
          ))}
        </div>

        {/* Rendering the billboard for the active category */}
        <div className="space-y-4">
          {categories.map(
            (cat) =>
              cat.active &&
              cat.billboard && (
                <div
                  key={cat.id}
                  className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
                  style={{ backgroundImage: `url(${cat.billboard.image_url})` }}
                >
                  <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="text-gray-200 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                      {cat.billboard.label}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" data={categories} />
      </div>
    </>
  );
};

export default BillBoard;
