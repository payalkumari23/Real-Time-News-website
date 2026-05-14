import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const TrendingSidebar = ({ trendingNews }) => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`rounded-xl overflow-hidden backdrop-blur-md transition-colors duration-300 h-fit sticky top-24 ${
        isDark
          ? 'bg-gray-800/40 border border-gray-700/50'
          : 'bg-white/40 border border-white/60'
      }`}
    >
      {/* Header */}
      <div className={`px-5 py-4 border-b ${isDark ? 'border-gray-700/50' : 'border-white/60'}`}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-lg font-bold flex items-center gap-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <span className="text-2xl">🔥</span>
          Trending Now
        </motion.h3>
      </div>

      {/* Ticker Animation */}
      <motion.div className="overflow-hidden h-10 bg-gradient-to-r from-blue-500/10 to-purple-600/10 flex items-center px-5">
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`whitespace-nowrap font-semibold ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          📊 Markets surging • 🚀 Tech innovation • 🎬 Entertainment buzz • 🏆 Sports highlights
        </motion.div>
      </motion.div>

      {/* Trending Items */}
      <motion.div variants={containerVariants} className="divide-y divide-gray-700/50">
        {trendingNews.slice(0, 5).map((news, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(news.url)}
            className={`w-full text-left px-5 py-4 transition-all hover:bg-white/10 dark:hover:bg-gray-700/50 group`}
          >
            <div className="flex items-start gap-3">
              {/* Rank Badge */}
              <div className={`text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                index === 0
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                  : index === 1
                  ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-white'
                  : index === 2
                  ? 'bg-gradient-to-r from-orange-300 to-orange-500 text-white'
                  : isDark
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className={`line-clamp-2 text-sm font-semibold leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {news.title}
                </h4>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  {new Date(news.publishedAt).toLocaleDateString()}
                </p>
              </div>

              {/* Arrow Icon */}
              <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* View All */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-5 py-3 text-center text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-purple-600/10 hover:from-blue-500/20 hover:to-purple-600/20 text-blue-600 dark:text-blue-400 transition-all"
      >
        View All Trending →
      </motion.button>
    </motion.aside>
  );
};

export default TrendingSidebar;
