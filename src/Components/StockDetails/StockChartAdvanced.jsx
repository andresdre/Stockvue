import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card.jsx';
import { Button } from '@/Components/ui/button.jsx';

// Mock data for different time ranges
const generateData = (numPoints, startValue, volatility) => {
  let data = [];
  let value = startValue;
  for (let i = 0; i < numPoints; i++) {
    value += (Math.random() - 0.5) * volatility;
    data.push({ time: i, value: value });
  }
  return data;
};

const dataSets = {
  '1D': generateData(50, 190, 2),
  '5D': generateData(50, 185, 4),
  '1M': generateData(50, 170, 8),
  '6M': generateData(50, 150, 15),
  '1Y': generateData(50, 130, 25),
};

export default function StockChartAdvanced({ stock }) {
  const [timeRange, setTimeRange] = useState('1M');
  const data = dataSets[timeRange];
  const isPositive = data[data.length - 1].value >= data[0].value;

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">{stock.symbol}</CardTitle>
            <CardDescription>{stock.company_name}</CardDescription>
          </div>
          <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {Object.keys(dataSets).map(range => (
              <Button
                key={range}
                variant={timeRange === range ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setTimeRange(range)}
                className={`transition-all ${timeRange === range ? 'bg-white dark:bg-gray-700 shadow' : ''}`}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isPositive ? '#10B981' : '#EF4444'} stopOpacity={0.4}/>
                  <stop offset="95%" stopColor={isPositive ? '#10B981' : '#EF4444'} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="time" hide />
              <YAxis stroke="#9CA3AF" fontSize={12} domain={['dataMin - 10', 'dataMax + 10']} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                }}
                formatter={(value) => `$${value.toFixed(2)}`}
              />
              <Area type="monotone" dataKey="value" stroke={isPositive ? '#10B981' : '#EF4444'} strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
