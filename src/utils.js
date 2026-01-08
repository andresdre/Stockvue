// src/utils.js
export const createPageUrl = (pageName) => `/${pageName}`;

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
  
  // Check if a value is rising or falling
  export function isPositive(value) {
    return Number(value) >= 0;
  }
  
  // Add a delay (useful for testing loading states)
  export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
