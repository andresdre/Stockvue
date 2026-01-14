// src/components/ui/input.jsx
import React from "react";

export const Input = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    className="border border-gray-300 px-3 py-2 rounded w-full"
    {...props}
  />
));

Input.displayName = "Input";

export default Input;
