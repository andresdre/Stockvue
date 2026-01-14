// src/components/ui/skeleton.jsx
import React from "react";
import PropTypes from "prop-types";

export function Skeleton({ className = "", ...props }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

Skeleton.propTypes = {
  className: PropTypes.string,
};

export default Skeleton;
