import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const topGainers = [
  { symbol: "NVDA", name: "NVIDIA Corp", price: "$485.20", change: "+12.45%", changeAmount: "+$53.80" },
  { symbol: "AMZN", name: "Amazon.com Inc", price: "$3,247.15", change: "+8.92%", changeAmount: "+$266.30" },
  { symbol: "GOOGL", name: "Alphabet Inc", price: "$2,891.47", change: "+5.67%", changeAmount: "+$155.20" },
];

const topLosers = [
  { symbol: "TSLA", name: "Tesla Inc", price: "$201.23", change: "-6.78%", changeAmount: "-$14.65" },
  { symbol: "META", name: "Meta Platforms", price: "$331.85", change: "-4.32%", changeAmount: "-$14.97" },
  { symbol: "NFLX", name: "Netflix Inc", price: "$456.78", change: "-3.21%", changeAmount: "-$15.15" },
];

export default function TopMovers() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Top Gainers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topGainers.map((stock, index) => (
                <div key={stock.symbol} className="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{stock.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{stock.symbol}</div>
                      <div className="text-sm text-gray-500">{stock.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">{stock.price}</div>
                    <div className="text-sm text-green-500 font-medium">{stock.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingDown className="w-5 h-5 text-red-500" />
              Top Losers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topLosers.map((stock, index) => (
                <div key={stock.symbol} className="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{stock.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{stock.symbol}</div>
                      <div className="text-sm text-gray-500">{stock.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">{stock.price}</div>
                    <div className="text-sm text-red-500 font-medium">{stock.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
