// src/Components/ui/dialog.jsx
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/* Dialog root */
export function Dialog({
  open = true,
  onClose,
  children,
  className = "",
  closeOnBackdropClick = true,
  ...props
}) {
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    const timer = setTimeout(() => {
      const el = document.querySelector("[role='dialog']");
      if (el && typeof el.focus === "function") el.focus();
    }, 0);
    return () => {
      clearTimeout(timer);
      if (previouslyFocused.current && typeof previouslyFocused.current.focus === "function") {
        previouslyFocused.current.focus();
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-hidden={!open}
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={`relative bg-white p-4 rounded shadow ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <button
          type="button"
          aria-label="Close dialog"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  closeOnBackdropClick: PropTypes.bool,
};

/* Dialog pieces for composition */
export function DialogContent({ children, className = "", ...props }) {
  return (
    <div className={`p-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
DialogContent.propTypes = { children: PropTypes.node, className: PropTypes.string };

export function DialogHeader({ children, className = "", ...props }) {
  return (
    <header className={`mb-2 ${className}`} {...props}>
      {children}
    </header>
  );
}
DialogHeader.propTypes = { children: PropTypes.node, className: PropTypes.string };

export function DialogTitle({ children, className = "", ...props }) {
  return (
    <h2 className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </h2>
  );
}
DialogTitle.propTypes = { children: PropTypes.node, className: PropTypes.string };

export function DialogTrigger({ children, className = "", ...props }) {
  return (
    <button className={`px-2 py-1 ${className}`} {...props}>
      {children}
    </button>
  );
}
DialogTrigger.propTypes = { children: PropTypes.node, className: PropTypes.string };

/* Default export for compatibility */
export default Dialog;
