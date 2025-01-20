import React, { FC } from "react";
import { Category, Color, Size } from "@/types";
import Button from "./button";
import { cn } from "@/libs/utils";

type FilterProps = {
  data: (Size | Color)[];
  category?: Category;
  name: string;
  valueKey: string;
  onClick: (id: string) => void;
  selectedValue?: string | null; 
};

const Filter: FC<FilterProps> = ({ data, name, onClick, selectedValue }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr />
      <div className="flex flex-wrap gap-2">
        {data &&
          data.map((filter) => (
            <div key={filter.id} className="flex items-center mt-2">
              <Button
                className={cn(
                  "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                  selectedValue === filter.id && "bg-black text-white"
                )}
                onClick={() => onClick(filter.id)} 
              >
                {filter.name}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filter;
