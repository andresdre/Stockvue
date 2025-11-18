import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { motion } from "framer-motion";

const marketData = [
  {
    name: "S&P 500",
    value: "4,587.18",
    change: "+12.45",
    changePercent: "+0.27%",
    isPositive: true,
    icon: TrendingUp,
  },
  {
    name: "NASDAQ",
    value: "14,385.32",
    change: "+89.67",
    changePercent: "+0.63%",
    isPositive: true,
    icon: TrendingUp,
  },
  {
    name: "DOW",
    value: "35,845.10",
    change: "-45.23",
    changePercent: "-0.13%",
    isPositive: false,
    icon: TrendingDown,
  },
  {
    name: "VIX",
    value: "16.85",
    change: "-0.42",
    changePercent: "-2.43%",
    isPositive: false,
    icon: Activity,
  },
];

export default function MarketOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {marketData.map((market, index) => (
        <motion.div
          key={market.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="glass-card hover:shadow-xl transition-all duration-300 border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {market.name}
              </CardTitle>
              <market.icon className={`w-4 h-4 ${market.isPositive ? 'text-green-500' : 'text-red-500'}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {market.value}
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${market.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {market.change}
                </span>
                <span className={`text-sm ${market.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {market.changePercent}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
