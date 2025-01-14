"use client";
import React, { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="ml-auto flex items-center">
      <Button className="flex items-center gap-x-4">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
