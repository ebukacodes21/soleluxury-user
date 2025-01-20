"use client";
import React, { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="ml-auto flex items-center">
      <Button className="flex items-center gap-x-4" onClick={() => router.push('/cart')}>
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
