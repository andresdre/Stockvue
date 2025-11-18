import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function KeyStats({ stock }) {
  const stats = [
    { label: "Market Cap", value: `${(stock.market_cap / 1e12).toFixed(2)}T` },
    { label: "Volume", value: `${(stock.volume / 1e6).toFixed(2)}M` },
    { label: "P/E Ratio", value: stock.pe_ratio },
    { label: "Dividend Yield", value: `${stock.dividend_yield}%` },
    { label: "Day's Range", value: `${stock.day_low} - ${stock.day_high}` },
    { label: "52-Week Range", value: `${stock.week_52_low} - ${stock.week_52_high}` },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Key Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
          {stats.map(stat => (
            <div key={stat.label} className="flex justify-between items-baseline">
              <span className="text-sm text-gray-500">{stat.label}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
