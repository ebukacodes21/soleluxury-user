import { Billboard } from "@/types";
import React, { FC } from "react";

type BillboardProp = {
  data: Billboard[];
};

const BillBoard: FC<BillboardProp> = ({ data }) => {
  const stores = data.map((billboard) => ({
    label: billboard.label,
    imageUrl: billboard.image_url,
    id: billboard.id,
  }));

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {stores.map((store) => (
        <div
          className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
          style={{ backgroundImage: `url(${store?.imageUrl})` }}
          key={store.id}
        >
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="text-gray-200 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              {/* {store?.label} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BillBoard;
