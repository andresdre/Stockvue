import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning";
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", ...props }) => {
  const base = "inline-block px-2 py-1 text-xs rounded";
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
  };
  return <span className={`${base} ${variants[variant]}`} {...props} />;
};
