"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { FC, MouseEventHandler } from "react";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";  
import usePreview from "@/hooks/usePreview";
import useCart from "@/hooks/useCart";

type ProductCardProp = {
  data: Product;
};

const ProductCard: FC<ProductCardProp> = ({ data }) => {
  const preview = usePreview()
  const cart = useCart()
  const router = useRouter();

  const handleClick = () => {
    const queryParams = new URLSearchParams({
      productId: data.id.toString(),
      categoryId: data.category.id.toString(),
    }).toString();  

    // Redirect to the product page with query parameters
    router.push(`/product?${queryParams}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    preview.onOpen(data)
  } 

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data)
  } 

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          src={data.images[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />

            <IconButton
              onClick={addToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data.price}/>
      </div>
    </div>
  );
};

export default ProductCard;