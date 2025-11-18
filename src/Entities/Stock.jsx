//src/Entities/Stock.jsx
export default {
    "name": "Stock",
    "type": "object",
    "properties": {
      "symbol": {
        "type": "string",
        "description": "Stock ticker symbol (e.g., AAPL, GOOGL)"
      },
      "company_name": {
        "type": "string",
        "description": "Full company name"
      },
      "current_price": {
        "type": "number",
        "description": "Current stock price"
      },
      "price_change": {
        "type": "number",
        "description": "Price change from previous close"
      },
      "price_change_percent": {
        "type": "number",
        "description": "Percentage change from previous close"
      },
      "volume": {
        "type": "number",
        "description": "Trading volume"
      },
      "market_cap": {
        "type": "number",
        "description": "Market capitalization"
      },
      "pe_ratio": {
        "type": "number",
        "description": "Price-to-earnings ratio"
      },
      "day_high": {
        "type": "number",
        "description": "Highest price of the day"
      },
      "day_low": {
        "type": "number",
        "description": "Lowest price of the day"
      },
      "week_52_high": {
        "type": "number",
        "description": "52-week high"
      },
      "week_52_low": {
        "type": "number",
        "description": "52-week low"
      },
      "sector": {
        "type": "string",
        "description": "Industry sector"
      },
      "dividend_yield": {
        "type": "number",
        "description": "Dividend yield percentage"
      }
    },
    "required": [
      "symbol",
      "company_name",
      "current_price"
    ]
  };
