import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, TrendingDown, Plus, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { createPageUrl } from '@/utils';

import Stock from '../Entities/Stock';
import News from '../Entities/News';
import StockChartAdvanced from '../Components/StockDetails/StockChartAdvanced';
import KeyStats from '../Components/StockDetails/KeyStats';
import CompanyProfile from '../Components/StockDetails/CompanyProfile';
import AnalystRatings from '../Components/StockDetails/AnalystsRatings'
import NewsList from '../Components/News/NewsList';

export default function StockDetails() {
  const location = useLocation();
  const [stock, setStock] = useState(null);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const urlParams = new URLSearchParams(location.search);
  const symbol = urlParams.get('symbol');

  useEffect(() => {
    if (symbol) {
      const fetchData = async () => {
        setIsLoading(true);
        const [stockData] = await Stock.filter({ symbol: symbol });
        const newsData = await News.filter({ related_symbols: { "$in": [symbol] } }, "-published_at", 5);

        setStock(stockData);
        setNews(newsData);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [symbol]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Skeleton className="h-10 w-64" />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-96 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!stock) {
    return (
      <div className="text-center p-12">
        <h2 className="text-2xl font-bold">Stock not found</h2>
        <p className="text-gray-500">Could not find data for symbol: {symbol}</p>
        <Link to={createPageUrl("Markets")}>
          <Button className="mt-4">Back to Markets</Button>
        </Link>
      </div>
    );
  }

  const isPositive = stock.price_change >= 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to={createPageUrl("Markets")} className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Markets
          </Link>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{stock.company_name} ({stock.symbol})</h1>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="text-3xl font-bold">${stock.current_price.toFixed(2)}</span>
                <span className={`flex items-center gap-1 text-lg font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                  {isPositive ? '+' : ''}{stock.price_change.toFixed(2)} ({isPositive ? '+' : ''}{stock.price_change_percent.toFixed(2)}%)
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline"><Eye className="w-4 h-4 mr-2" /> Add to Watchlist</Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600"><Plus className="w-4 h-4 mr-2" /> Add to Portfolio</Button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <StockChartAdvanced stock={stock} />
            {news.length > 0 && <NewsList newsItems={news} title="Related News" />}
          </div>
          <div className="space-y-6">
            <KeyStats stock={stock} />
            <AnalystRatings />
            <CompanyProfile stock={stock} />
          </div>
        </div>
      </div>
    </div>
  );
}
