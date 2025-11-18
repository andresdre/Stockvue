export default {
    "name": "Portfolio",
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
      "shares_owned": {
        "type": "number",
        "description": "Number of shares owned"
      },
      "average_cost": {
        "type": "number",
        "description": "Average cost per share"
      },
      "current_price": {
        "type": "number",
        "description": "Current stock price"
      },
      "purchase_date": {
        "type": "string",
        "format": "date",
        "description": "Date of purchase"
      },
      "total_investment": {
        "type": "number",
        "description": "Total amount invested"
      },
      "current_value": {
        "type": "number",
        "description": "Current value of holdings"
      },
      "gain_loss": {
        "type": "number",
        "description": "Gain or loss amount"
      },
      "gain_loss_percent": {
        "type": "number",
        "description": "Gain or loss percentage"
      }
    },
    "required": [
      "stock_symbol",
      "company_name",
      "shares_owned",
      "average_cost"
    ]
  };
  