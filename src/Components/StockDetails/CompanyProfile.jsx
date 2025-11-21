import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

export default function CompanyProfile({ stock }) {
  const profiles = {
    "AAPL": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.",
    "GOOGL": "Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.",
    "MSFT": "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.",
    "TSLA": "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally.",
    "NVDA": "NVIDIA Corporation provides graphics, and compute and networking solutions in the United States, Taiwan, China, and internationally."
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Company Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {profiles[stock.symbol] || "No profile available."}
        </p>
      </CardContent>
    </Card>
  );
}
