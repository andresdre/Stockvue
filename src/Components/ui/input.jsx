import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => (
    <input
      ref={ref}
      className="border border-gray-300 px-3 py-2 rounded w-full"
      {...props}
    />
  )
);
Input.displayName = "Input";
