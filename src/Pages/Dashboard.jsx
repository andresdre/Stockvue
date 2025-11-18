import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Eye, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import MarketOverview from "../components/dashboard/MarketOverview";
import TopMovers from "../components/dashboard/TopMovers";
import MarketChart from "../components/dashboard/MarketChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Market Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Track your investments and monitor market trends
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Alerts
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <TrendingUp className="w-4 h-4 mr-2" />
              New Analysis
            </Button>
          </div>
        </motion.div>

        <MarketOverview />

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <MarketChart />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Portfolio Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      $127,450.30
                    </div>
                    <div className="text-green-500 font-medium">
                      +$3,240.15 (+2.61%)
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Day's Change</span>
                      <span className="text-green-500 font-medium">+$1,234.56</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Total Return</span>
                      <span className="text-green-500 font-medium">+$12,450.30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Cash Available</span>
                      <span className="text-gray-900 dark:text-white font-medium">$5,320.45</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600">
                        View Portfolio
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Add Position
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <TopMovers />
      </div>
    </div>
  );
}
