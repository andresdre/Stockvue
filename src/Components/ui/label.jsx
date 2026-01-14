// src/components/ui/label.jsx
import React from "react";
import PropTypes from "prop-types";
export function Label({ className = "", ...props }) {
  return <label className={`block text-sm font-medium text-gray-700 ${className}`} {...props} />;
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
