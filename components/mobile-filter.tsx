import { Color, Size } from "@/types";
import React, { FC, useState } from "react";
import Button from "./ui/button";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "./ui/icon-button";
import Filter from "./ui/filter";

type MobileFiltersProp = {
  sizes: Size[];
  colors: Color[];
  selectedSizeId: string | null;
  selectedColorId: string | null;
  handleSizeFilter: (id: string) => void;
  handleColorFilter: (id: string) => void;
};

const MobileFilters: FC<MobileFiltersProp> = ({
  sizes,
  colors,
  selectedSizeId,
  selectedColorId,
  handleSizeFilter,
  handleColorFilter,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus />
      </Button>
      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="px-2 relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <Filter
              data={sizes}
              name="Sizes"
              valueKey="sizeId"
              onClick={handleSizeFilter}
              selectedValue={selectedSizeId}
            />
            <Filter
              data={colors}
              name="Colors"
              valueKey="colorId"
              onClick={handleColorFilter}
              selectedValue={selectedColorId}
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
