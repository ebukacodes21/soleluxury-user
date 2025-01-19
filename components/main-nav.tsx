"use client";

import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { Store } from "@/types";
import { usePathname } from "next/navigation";

type MainNavProps = {
  data: Store[];
};

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname()

  const routes = data.map((route) => ({
    href: `/store/${route.id}`,
    name: route.name,
    active: pathName === `/store/${route.id}`, 
  }));

  return (
    <div>
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black hover:border-b hover:border-red-400",
              route.active ? "text-black border-b border-red-400" : "text-neutral-500"
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
