export default {
    "name": "News",
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "The headline of the news article."
      },
      "source": {
        "type": "string",
        "description": "The source of the news article (e.g., Bloomberg, Reuters)."
      },
      "url": {
        "type": "string",
        "description": "The URL to the full article."
      },
      "image_url": {
        "type": "string",
        "description": "URL of the article's featured image."
      },
      "summary": {
        "type": "string",
        "description": "A brief summary of the article."
      },
      "published_at": {
        "type": "string",
        "format": "date-time",
        "description": "The publication date and time of the article."
      },
      "related_symbols": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "description": "A list of stock symbols related to the article."
      }
    },
    "required": [
      "title",
      "source",
      "url",
      "summary",
      "published_at"
    ]
  };
