import React, { useState } from "react";

export const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex space-x-2 border-b pb-2">{children}</div>
);

export const TabsTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button className="px-3 py-1 text-sm font-medium" {...props} />
);

export const TabsContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-2">{children}</div>
);
