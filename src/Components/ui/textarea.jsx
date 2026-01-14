// src/components/Textarea.jsx
import React from "react";
import PropTypes from "prop-types";

export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full border border-gray-300 rounded p-2 ${className}`}
    {...props}
  />
));

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  className: PropTypes.string,
};

export default Textarea;
