export default {
    "name": "Watchlist",
    "type": "object",
    "properties": {
      "stock_symbol": {
        "type": "string",
        "description": "Stock ticker symbol"
      },
      "company_name": {
        "type": "string",
        "description": "Company name"
      },
      "target_price": {
        "type": "number",
        "description": "Target price for alerts"
      },
      "notes": {
        "type": "string",
        "description": "Personal notes about the stock"
      }
    },
    "required": [
      "stock_symbol",
      "company_name"
    ]
  };
  