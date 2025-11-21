import React from "react";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <textarea
    ref={ref}
    className="w-full border border-gray-300 rounded p-2"
    {...props}
  />
));
Textarea.displayName = "Textarea";
