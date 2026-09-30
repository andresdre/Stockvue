// src/utils.js
export function createPageUrl(base, params = {}) {
    const query = new URLSearchParams(params).toString();
    const path = base.toLowerCase();
    return query ? `/${path}?${query}` : `/${path}`;
  }
  
  export function formatNumber(value, decimals = 2) {
    if (value === null || value === undefined) return "-";
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  
  export function formatCurrency(value) {
    if (value === null || value === undefined) return "-";
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  
  export function formatPercent(value, decimals = 2) {
    if (value === null || value === undefined) return "-";
    return `${(value * 100).toFixed(decimals)}%`;
  }
  
  export function isPositive(value) {
    return Number(value) >= 0;
  }
  
  export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  