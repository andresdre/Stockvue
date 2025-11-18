import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useLiveSP500 } from "@/Components/Hooks/useLiveSP500";
import { motion } from "framer-motion";

import Spinner from "../../Components/Spinner";

// const chartData = [
//   { time: "9:30", value: 4575.20 },
//   { time: "10:00", value: 4578.45 },
//   { time: "10:30", value: 4582.10 },
//   { time: "11:00", value: 4579.85 },
//   { time: "11:30", value: 4585.30 },
//   { time: "12:00", value: 4587.18 },
//   { time: "12:30", value: 4589.45 },
//   { time: "13:00", value: 4591.20 },
//   { time: "13:30", value: 4587.85 },
//   { time: "14:00", value: 4592.10 },
//   { time: "14:30", value: 4594.75 },
//   { time: "15:00", value: 4596.30 },
// ];

export default function MarketChart() {
  const chartData = useLiveSP500();
  
    if (chartData.length === 0) {
      return <Spinner />;
    }
  
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="glass-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">S&P 500 Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#00D4FF" 
                  strokeWidth={3}
                  dot={{ fill: '#00D4FF', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#00D4FF' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
