// src/Components/ui/sidebar.jsx
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import PropTypes from "prop-types";

export function SidebarMenuButton({ asChild = false, children, className = "", ...rest }) {
  const Component = asChild ? Slot : "button";
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}

SidebarMenuButton.propTypes = {
  asChild: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Sidebar = ({ children, className = "", ...props }) => {
  return (
    <aside className={`w-64 bg-white border-r ${className}`} {...props}>
      {children}
    </aside>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const SidebarHeader = ({ children, className = "", ...props }) => (
  <div className={`px-4 py-3 border-b ${className}`} {...props}>
    {children}
  </div>
);

SidebarHeader.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarFooter = ({ children, className = "", ...props }) => (
  <div className={`px-4 py-3 border-t ${className}`} {...props}>
    {children}
  </div>
);

SidebarFooter.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 overflow-auto ${className}`} {...props}>
    {children}
  </div>

);
SidebarContent.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarGroup = ({ children, className = "", ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

SidebarGroup.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarGroupLabel = ({ children, className = "", ...props }) => (
  <div className={`px-2 py-1 text-xs font-semibold text-gray-500 ${className}`} {...props}>
    {children}
  </div>
);

SidebarGroupLabel.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarGroupContent = ({ children, className = "", ...props }) => (
  <div className={`mt-2 ${className}`} {...props}>
    {children}
  </div>
);

SidebarGroupContent.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarMenu = ({ children, className = "", ...props }) => (
  <nav className={`flex flex-col space-y-1 ${className}`} {...props}>
    {children}
  </nav>
);

SidebarMenu.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarMenuItem = ({ children, className = "", ...props }) => (
  <div className={`px-3 py-2 rounded hover:bg-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

SidebarMenuItem.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarProvider = ({ children, className = "", ...props }) => (
<div className={`px-3 py-2 rounded hover:bg-gray-100 ${className}`} {...props}>
  {children}
</div>
);

SidebarProvider.propTypes = { children: PropTypes.node, className: PropTypes.string };

export const SidebarTrigger = ({ children, className = "", ...props }) => (
  <button className={`px-2 py-1 text-sm ${className}`} {...props}>
    {children}
  </button>
);

SidebarTrigger.propTypes = { children: PropTypes.node, className: PropTypes.string };

export default Sidebar;
