"use client";

import React, { useEffect } from "react";
import Currency from "./ui/currency";
import Button from "./ui/button";
import useCart from "@/hooks/useCart";
import axios from "axios";
import apiConfig from "@/services/apiconfig";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams()

  useEffect(() => {
    if(searchParams.get("success")) {
        toast.success("payment completed")
        removeAll()
    }

    if(searchParams.get("cancelled")) {
        toast.error("something went wrong")
    }
  },[searchParams, removeAll])

  const data = items.map((item) => item.id)
  const totalPrice = items.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const onCheckout = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.checkOut,
        data: { items: data }, 
      });
  
      window.location = res.data.url;
    } catch (error: any) {
     console.log(error);
    }
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium tetx-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length < 0} className="w-full mt-6">Checkout</Button>
    </div>
  );
};

export default Summary;
