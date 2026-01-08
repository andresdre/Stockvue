import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { News } from '@/Entities/News.jsx';
import NewsList from '@/Components/News/NewsList.jsx';
import { Skeleton } from '@/Components/ui/skeleton.jsx';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const newsData = await News.list('-published_at');
      setNews(newsData);
      setIsLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Market News
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Stay updated with the latest financial headlines
          </p>
        </motion.div>

        {isLoading ? (
          <div className="space-y-6">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50">
                <Skeleton className="w-48 h-32 rounded-lg" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NewsList newsItems={news} />
        )}
      </div>
    </div>
  );
}
