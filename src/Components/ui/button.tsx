import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "outline" ? "border border-gray-400" : "bg-blue-600 text-white"
      }`}
      {...props}
    />
  );
};
