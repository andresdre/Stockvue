// src/utils.js

// Build a URL with query parameters
// Example:
// createPageUrl("/stocks", { page: 2, sort: "asc" })
// → "/stocks?page=2&sort=asc"
export function createPageUrl(base, params = {}) {
    const query = new URLSearchParams(params).toString();
    return query ? `${base}?${query}` : base;
  }
  
  // Format numbers like 12345.67 → "12,345.67"
  export function formatNumber(value, decimals = 2) {
    if (value === null || value === undefined) return "-";
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  
  // Format currency like 12345.67 → "$12,345.67"
  export function formatCurrency(value) {
    if (value === null || value === undefined) return "-";
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  
  // Format percentages like 0.1234 → "12.34%"
  export function formatPercent(value, decimals = 2) {
    if (value === null || value === undefined) return "-";
    return `${(value * 100).toFixed(decimals)}%`;
  }
  
  // Check if a value is positive (useful for green/red UI)
  export function isPositive(value) {
    return Number(value) >= 0;
  }
  
  // Add a delay (useful for simulating API loading)
  export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  