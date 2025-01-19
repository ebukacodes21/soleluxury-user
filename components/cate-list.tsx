"use client";
import { cn } from "@/libs/utils";
import { Category } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC } from "react";

type CateListProp = {
  data: Category[];
};

const CateList: FC<CateListProp> = ({ data }) => {
  const params = useParams();

  return (
      <div className="flex items-center space-x-3">
        {data.map((cat) => {
          const isActive = cat.id === params.categoryId;

          return (
            <Link
              href={`/store/${cat.store_id}/category/${cat.id}`}
              key={cat.id}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black cursor-pointer hover:border-b hover:border-red-400",
                isActive ? "border-b border-red-400 text-black font-bold" : ""
              )}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

  );
};

export default CateList;
