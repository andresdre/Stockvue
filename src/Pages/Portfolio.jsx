import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Portfolio from "@/Entities/Portfolio.jsx";
import { TrendingUp, TrendingDown, Plus, Trash2, Edit3 } from "lucide-react";
import { Button } from "@/Components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card.jsx";
import { Badge } from "@/Components/ui/badge.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { Label } from "@/Components/ui/label.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog.jsx";

export default function PortfolioPage() {
  const [holdings, setHoldings] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newHolding, setNewHolding] = useState({
    stock_symbol: "",
    company_name: "",
    shares_owned: "",
    average_cost: "",
    current_price: "",
    purchase_date: ""
  });

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    const data = await Portfolio.list();
    setHoldings(data);
  };

  const handleAddHolding = async () => {
    const totalInvestment = parseFloat(newHolding.shares_owned) * parseFloat(newHolding.average_cost);
    const currentValue = parseFloat(newHolding.shares_owned) * parseFloat(newHolding.current_price);
    const gainLoss = currentValue - totalInvestment;
    const gainLossPercent = (gainLoss / totalInvestment) * 100;

    await Portfolio.create({
      ...newHolding,
      shares_owned: parseFloat(newHolding.shares_owned),
      average_cost: parseFloat(newHolding.average_cost),
      current_price: parseFloat(newHolding.current_price),
      total_investment: totalInvestment,
      current_value: currentValue,
      gain_loss: gainLoss,
      gain_loss_percent: gainLossPercent
    });

    setShowAddDialog(false);
    setNewHolding({
      stock_symbol: "",
      company_name: "",
      shares_owned: "",
      average_cost: "",
      current_price: "",
      purchase_date: ""
    });
    loadPortfolio();
  };

  const totalValue = holdings.reduce((sum, holding) => sum + (holding.current_value || 0), 0);
  const totalGainLoss = holdings.reduce((sum, holding) => sum + (holding.gain_loss || 0), 0);
  const totalGainLossPercent = totalValue > 0 ? (totalGainLoss / (totalValue - totalGainLoss)) * 100 : 0;

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
              My Portfolio
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Track your investments and performance
            </p>
          </div>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Position
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Position</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="symbol">Stock Symbol</Label>
                  <Input
                    id="symbol"
                    value={newHolding.stock_symbol}
                    onChange={(e) => setNewHolding({...newHolding, stock_symbol: e.target.value})}
                    placeholder="AAPL"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={newHolding.company_name}
                    onChange={(e) => setNewHolding({...newHolding, company_name: e.target.value})}
                    placeholder="Apple Inc."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="shares">Shares</Label>
                    <Input
                      id="shares"
                      type="number"
                      value={newHolding.shares_owned}
                      onChange={(e) => setNewHolding({...newHolding, shares_owned: e.target.value})}
                      placeholder="100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cost">Avg Cost</Label>
                    <Input
                      id="cost"
                      type="number"
                      step="0.01"
                      value={newHolding.average_cost}
                      onChange={(e) => setNewHolding({...newHolding, average_cost: e.target.value})}
                      placeholder="150.00"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="current">Current Price</Label>
                    <Input
                      id="current"
                      type="number"
                      step="0.01"
                      value={newHolding.current_price}
                      onChange={(e) => setNewHolding({...newHolding, current_price: e.target.value})}
                      placeholder="175.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Purchase Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newHolding.purchase_date}
                      onChange={(e) => setNewHolding({...newHolding, purchase_date: e.target.value})}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleAddHolding}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
                >
                  Add Position
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${totalValue.toFixed(2)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Total Gain/Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {totalGainLoss >= 0 ? '+' : ''}${totalGainLoss.toFixed(2)}
                </div>
                <div className={`text-sm ${totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {totalGainLossPercent >= 0 ? '+' : ''}{totalGainLossPercent.toFixed(2)}%
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {holdings.length}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid gap-4">
          {holdings.map((holding, index) => (
            <motion.div
              key={holding.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="glass-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{holding.stock_symbol[0]}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{holding.stock_symbol}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{holding.company_name}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Shares</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{holding.shares_owned}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Avg Cost</div>
                        <div className="font-semibold text-gray-900 dark:text-white">${holding.average_cost?.toFixed(2)}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Current</div>
                        <div className="font-semibold text-gray-900 dark:text-white">${holding.current_price?.toFixed(2)}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Value</div>
                        <div className="font-semibold text-gray-900 dark:text-white">${holding.current_value?.toFixed(2)}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Gain/Loss</div>
                        <div className={`font-semibold ${holding.gain_loss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {holding.gain_loss >= 0 ? '+' : ''}${holding.gain_loss?.toFixed(2)}
                        </div>
                        <div className={`text-sm ${holding.gain_loss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {holding.gain_loss_percent >= 0 ? '+' : ''}{holding.gain_loss_percent?.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
