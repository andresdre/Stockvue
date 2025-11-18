import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function AnalystRatings() {
  const ratings = {
    buy: 75,
    hold: 20,
    sell: 5,
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Analyst Ratings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-green-500 font-medium">Buy</span>
              <span className="text-sm text-gray-400">{ratings.buy}%</span>
            </div>
            <Progress value={ratings.buy} className="h-2 [&>div]:bg-green-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-yellow-500 font-medium">Hold</span>
              <span className="text-sm text-gray-400">{ratings.hold}%</span>
            </div>
            <Progress value={ratings.hold} className="h-2 [&>div]:bg-yellow-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-red-500 font-medium">Sell</span>
              <span className="text-sm text-gray-400">{ratings.sell}%</span>
            </div>
            <Progress value={ratings.sell} className="h-2 [&>div]:bg-red-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
