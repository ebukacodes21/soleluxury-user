import { cn } from "@/libs/utils";
import React, { forwardRef } from "react";

export interface ButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProp>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold hover:opacity-75 transition`, className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
