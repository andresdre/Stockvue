// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "@/Layout.jsx";
import Dashboard from "@/Pages/Dashboard.jsx";
import Markets from "@/Pages/Markets.jsx";
import Watchlist from "@/Pages/Watchlist.jsx";
import Portfolio from "@/Pages/Portfolio.jsx";
import NewsList from "@/Components/News/NewsList.jsx";
import StockDetails from "@/Pages/StockDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="markets" element={<Markets />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="news" element={<NewsList />} />
        <Route path="stock-details" element={<StockDetails />} />
      </Route>
    </Routes>
  );
}
