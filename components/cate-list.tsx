"use client";
import { cn } from "@/libs/utils";
import { Category } from "@/types";
import Link from "next/link";
import React, { FC, useState } from "react";

type CateListProp = {
  data: Category[];
};

const CateList: FC<CateListProp> = ({ data }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
    data[0]?.id || null
  );

  const categories = data.map((cat) => ({
    id: cat.id,
    name: cat.name,
    route: `/category/${cat.id}`,
    active: activeCategoryId === cat.id,
    billboard: cat.billboard,
    products: cat.products,
  }));

  return (
    <div className="flex items-center space-x-3">
      {categories.map((cat) => (
        <Link
          href={cat.route}
          key={cat.id}
          onClick={() => setActiveCategoryId(cat.id)}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black cursor-pointer hover:border-b border-black",
          )}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default CateList;
