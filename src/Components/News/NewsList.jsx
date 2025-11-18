import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Calendar, Landmark } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import News from '../../Entities/News';

export default function NewsList({ newsItems, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="glass-card">
        <CardContent className="p-6">
          {title && <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>}
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200 group">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img src={item.image_url} alt={item.title} className="w-full md:w-48 h-32 md:h-auto object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1.5"><Landmark className="w-3 h-3"/> {item.source}</div>
                        <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3"/> {formatDistanceToNow(new Date(item.published_at))} ago</div>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.summary}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors absolute top-4 right-4" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
