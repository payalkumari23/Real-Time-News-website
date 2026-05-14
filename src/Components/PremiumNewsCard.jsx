import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const PremiumNewsCard = ({ news, index }) => {
  const { isDark } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const hoverVariants = {
    rest: { y: 0 },
    hover: { y: -8, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.4 } },
  };

  const publishedDate = new Date(news.publishedAt);
  const timeAgo = getTimeAgo(publishedDate);

  function getTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px' }}
      whileHover="hover"
      animate="rest"
      className={`group rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
        isDark
          ? 'bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/50'
          : 'bg-white/40 border border-white/60 hover:border-blue-400/50'
      }`}
    >
      <motion.div
        variants={hoverVariants}
        className="h-full flex flex-col"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-48 bg-gray-300 dark:bg-gray-700">
          <motion.img
            variants={imageVariants}
            src={news.urlToImage || 'https://via.placeholder.com/400x300?text=News'}
            alt={news.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold bg-blue-500/90 text-white backdrop-blur-sm"
          >
            Featured
          </motion.div>

          {/* Bookmark Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            {isBookmarked ? (
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 19V5z" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-5">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`line-clamp-2 text-base sm:text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {news.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`line-clamp-2 text-sm mb-3 flex-1 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {news.description}
          </motion.p>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex items-center justify-between pt-3 border-t ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <p className="font-medium truncate">{news.source?.name || 'Unknown Source'}</p>
              <p>{timeAgo}</p>
            </div>

            {/* Read More Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(news.url)}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all opacity-0 group-hover:opacity-100"
              title="Read More"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default PremiumNewsCard;
