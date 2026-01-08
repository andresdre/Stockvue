// src/utils/index.ts
export const formatNumber = (num: number): string =>
    Intl.NumberFormat("en-US", { notation: "compact" }).format(num);
  
  export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  
  // Add more utility functions here as needed
  