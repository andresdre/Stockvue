// src/components/Button.jsx
import React from "react";
import PropTypes from "prop-types";

export function Button({ variant = "default", className = "", children, ...props }) {
  const base = "px-4 py-2 rounded";
  const variantClass =
    variant === "outline" ? "border border-gray-400 bg-transparent" : "bg-blue-600 text-white";

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "outline"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
