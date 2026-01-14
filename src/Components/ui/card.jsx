// src/Components/ui/card.jsx
import React from "react";
import PropTypes from "prop-types";

/* Card root (supports default and named import) */
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`border rounded shadow-sm p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/* CardHeader */
export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`mb-2 font-semibold text-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/* CardTitle */
export const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3 className={`text-xl font-bold ${className}`} {...props}>
      {children}
    </h3>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/* CardDescription */
export const CardDescription = ({ children, className = "", ...props }) => {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
};

CardDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/* CardContent */
export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`text-sm text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/* Default export for compatibility */
export default Card;
