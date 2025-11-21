import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Watchlist from "../Entities/Watchlist";
import { Eye, Plus, Trash2, Target, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "../Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card";
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";
import { Textarea } from "../Components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../Components/ui/dialog";

// Mock current prices for demonstration
const mockPrices = {
  "AAPL": 189.95,
  "GOOGL": 2891.47,
  "MSFT": 378.85,
  "AMZN": 3247.15,
  "TSLA": 201.23,
  "NVDA": 485.20
};

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newStock, setNewStock] = useState({
    stock_symbol: "",
    company_name: "",
    target_price: "",
    notes: ""
  });

  useEffect(() => {
    loadWatchlist();
  }, []);

  const loadWatchlist = async () => {
    const data = await Watchlist.list();
    setWatchlist(data);
  };

  const handleAddStock = async () => {
    await Watchlist.create({
      ...newStock,
      target_price: parseFloat(newStock.target_price) || null
    });

    setShowAddDialog(false);
    setNewStock({
      stock_symbol: "",
      company_name: "",
      target_price: "",
      notes: ""
    });
    loadWatchlist();
  };

  const handleRemoveStock = async (id) => {
    await Watchlist.delete(id);
    loadWatchlist();
  };

  const getCurrentPrice = (symbol) => {
    return mockPrices[symbol] || 0;
  };

  const getTargetDistance = (currentPrice, targetPrice) => {
    if (!targetPrice) return null;
    const distance = ((targetPrice - currentPrice) / currentPrice) * 100;
    return distance;
  };

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
              Watchlist
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Monitor your favorite stocks and track price targets
            </p>
          </div>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add to Watchlist
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add Stock to Watchlist</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="symbol">Stock Symbol</Label>
                  <Input
                    id="symbol"
                    value={newStock.stock_symbol}
                    onChange={(e) => setNewStock({...newStock, stock_symbol: e.target.value.toUpperCase()})}
                    placeholder="AAPL"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={newStock.company_name}
                    onChange={(e) => setNewStock({...newStock, company_name: e.target.value})}
                    placeholder="Apple Inc."
                  />
                </div>
                <div>
                  <Label htmlFor="target">Target Price (Optional)</Label>
                  <Input
                    id="target"
                    type="number"
                    step="0.01"
                    value={newStock.target_price}
                    onChange={(e) => setNewStock({...newStock, target_price: e.target.value})}
                    placeholder="200.00"
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={newStock.notes}
                    onChange={(e) => setNewStock({...newStock, notes: e.target.value})}
                    placeholder="Investment thesis, reasons for watching..."
                    rows={3}
                  />
                </div>
                <Button 
                  onClick={handleAddStock}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
                >
                  Add to Watchlist
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="grid gap-4">
          {watchlist.map((stock, index) => {
            const currentPrice = getCurrentPrice(stock.stock_symbol);
            const targetDistance = getTargetDistance(currentPrice, stock.target_price);
            
            return (
              <motion.div
                key={stock.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass-card hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{stock.stock_symbol[0]}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{stock.stock_symbol}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{stock.company_name}</p>
                          {stock.notes && (
                            <p className="text-sm text-gray-500 mt-1 max-w-md">{stock.notes}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Current Price</div>
                          <div className="font-bold text-xl text-gray-900 dark:text-white">
                            ${currentPrice.toFixed(2)}
                          </div>
                        </div>
                        
                        {stock.target_price && (
                          <div className="text-center">
                            <div className="text-sm text-gray-500">Target Price</div>
                            <div className="font-semibold text-gray-900 dark:text-white">
                              ${stock.target_price.toFixed(2)}
                            </div>
                            {targetDistance !== null && (
                              <div className={`text-sm flex items-center gap-1 justify-center ${
                                targetDistance >= 0 ? 'text-green-500' : 'text-red-500'
                              }`}>
                                {targetDistance >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {targetDistance >= 0 ? '+' : ''}{targetDistance.toFixed(1)}%
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRemoveStock(stock.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
          
          {watchlist.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Your watchlist is empty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Add stocks to track their performance and set price targets
              </p>
              <Button
                onClick={() => setShowAddDialog(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Stock
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
