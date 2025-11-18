import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Pages/Dashboard";
import Markets from "./Pages/Markets";
import Watchlist from "./Pages/Watchlist";
import Portfolio from "./Pages/Portfolio";
import NewsList from "./Components/News/NewsList";
import StockDetails from "./Pages/StockDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="markets" element={<Markets />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="news" element={<NewsList />} />
          <Route path="stock-details" element={<StockDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
