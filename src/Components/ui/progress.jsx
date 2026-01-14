// src/components/ui/progress.jsx
import React from "react";
import PropTypes from "prop-types";

export function Progress({ value, max = 100, className = "", ...props }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className={`w-full bg-gray-200 rounded h-2 ${className}`} {...props}>
      <div
        className="bg-blue-600 h-2 rounded"
        style={{ width: `${pct}%` }}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        role="progressbar"
      />
    </div>
  );
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  className: PropTypes.string,
};

export default Progress;
