import React from "react";
import { useEffect, useState } from "react";

export function useLiveSP500() {
  const [data, setData] = useState<{ time: string; value: number }[]>([]);

  useEffect(() => {
    const socket = new WebSocket("wss://ws.finnhub.io?token=YOUR_API_KEY");

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "subscribe", symbol: "SPY" }));
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "trade") {
        const trade = message.data[0];
        setData((prev) => [
          ...prev.slice(-11),
          {
            time: new Date(trade.t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            value: trade.p,
          },
        ]);
      }
    };

    return () => {
      socket.send(JSON.stringify({ type: "unsubscribe", symbol: "SPY" }));
      socket.close();
    };
  }, []);

  return data;
}
