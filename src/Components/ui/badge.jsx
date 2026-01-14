// src/components/ui/badge.jsx
import React from "react";
import PropTypes from "prop-types";
export function Badge({ variant = "default", className = "", ...props }) {
  const base = "inline-block px-2 py-1 text-xs rounded";
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}

Badge.propTypes = {
  variant: PropTypes.oneOf(["default", "success", "warning"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Badge;
