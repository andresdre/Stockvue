// src/components/ui/tabs.jsx
import React, { createContext, useContext, useId, useState } from "react";

const TabsContext = createContext(null);

export function Tabs({ children, defaultIndex = 0, value, onChange, className = "" }) {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const activeIndex = value !== undefined ? value : internalIndex;

  function setActiveIndex(i) {
    if (value === undefined) setInternalIndex(i);
    if (typeof onChange === "function") onChange(i);
  }

  const idBase = useId ? useId() : `tabs-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex, idBase }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return (
    <div role="tablist" aria-orientation="horizontal" className={`flex space-x-2 border-b pb-2 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ index = 0, className = "", ...props }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used inside Tabs");
  const { activeIndex, setActiveIndex, idBase } = ctx;
  const selected = activeIndex === index;
  const tabId = `${idBase}-tab-${index}`;
  const panelId = `${idBase}-panel-${index}`;

  function handleKeyDown(e) {
    const el = e.currentTarget;
    if (e.key === "ArrowRight") {
      const next = el.nextElementSibling || el.parentElement?.firstElementChild;
      if (next) next.focus();
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      const prev = el.previousElementSibling || el.parentElement?.lastElementChild;
      if (prev) prev.focus();
      e.preventDefault();
    } else if (e.key === "Home") {
      const first = el.parentElement?.firstElementChild;
      if (first) first.focus();
      e.preventDefault();
    } else if (e.key === "End") {
      const last = el.parentElement?.lastElementChild;
      if (last) last.focus();
      e.preventDefault();
    }
  }

  return (
    <button
      role="tab"
      id={tabId}
      aria-controls={panelId}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      data-index={index}
      className={`px-3 py-1 text-sm font-medium ${selected ? "border-b-2 border-blue-500" : "text-gray-600"} ${className}`}
      onClick={() => setActiveIndex(index)}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}

export function TabsContent({ children, index = 0, className = "" }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used inside Tabs");
  const { activeIndex, idBase } = ctx;
  const hidden = activeIndex !== index;
  const panelId = `${idBase}-panel-${index}`;
  const tabId = `${idBase}-tab-${index}`;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      hidden={hidden}
      className={`mt-2 ${className}`}
    >
      {!hidden ? children : null}
    </div>
  );
}
