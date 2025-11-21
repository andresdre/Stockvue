import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, TrendingDown, Plus, Eye, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/tabs";

const stockData = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 189.95,
    change: 2.45,
    changePercent: 1.31,
    volume: "52.3M",
    marketCap: "2.95T",
    sector: "Technology"
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2891.47,
    change: -23.15,
    changePercent: -0.79,
    volume: "1.2M",
    marketCap: "1.83T",
    sector: "Technology"
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 378.85,
    change: 5.67,
    changePercent: 1.52,
    volume: "25.8M",
    marketCap: "2.81T",
    sector: "Technology"
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3247.15,
    change: 45.30,
    changePercent: 1.42,
    volume: "3.1M",
    marketCap: "1.65T",
    sector: "Consumer Discretionary"
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 201.23,
    change: -12.45,
    changePercent: -5.83,
    volume: "85.2M",
    marketCap: "638.9B",
    sector: "Consumer Discretionary"
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 485.20,
    change: 18.75,
    changePercent: 4.02,
    volume: "41.7M",
    marketCap: "1.19T",
    sector: "Technology"
  }
];

export default function Markets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");

  const filteredStocks = stockData.filter(stock => 
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sectorStocks = selectedSector === "all" 
    ? filteredStocks 
    : filteredStocks.filter(stock => stock.sector === selectedSector);

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
              Stock Markets
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore and analyze market opportunities
            </p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search stocks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex">
            <TabsTrigger value="all" onClick={() => setSelectedSector("all")}>All</TabsTrigger>
            <TabsTrigger value="Technology" onClick={() => setSelectedSector("Technology")}>Technology</TabsTrigger>
            <TabsTrigger value="Healthcare" onClick={() => setSelectedSector("Healthcare")}>Healthcare</TabsTrigger>
            <TabsTrigger value="Financial" onClick={() => setSelectedSector("Financial")}>Financial</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4">
              {sectorStocks.map((stock, index) => (
                <motion.div
                  key={stock.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={createPageUrl(`StockDetails?symbol=${stock.symbol}`)} className="block">
                    <Card className="glass-card hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-lg">{stock.symbol[0]}</span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{stock.symbol}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {stock.sector}
                                </Badge>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400">{stock.name}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6">
                            <div className="text-right">
                              <div className="font-bold text-xl text-gray-900 dark:text-white">
                                ${stock.price.toFixed(2)}
                              </div>
                              <div className={`flex items-center gap-1 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                <span className="font-medium">
                                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                                </span>
                              </div>
                            </div>
                            
                            <div className="text-right text-sm text-gray-500 hidden md:block">
                              <div>Vol: {stock.volume}</div>
                              <div>Cap: {stock.marketCap}</div>
                            </div>
                            
                            <ChevronRight className="w-6 h-6 text-gray-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
