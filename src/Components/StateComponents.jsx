import React from 'react';
import { useTheme } from '../context/ThemeContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const EmptyState = ({ onRetry }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="mb-6"
      >
        <span className="text-6xl">📭</span>
      </motion.div>

      <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        No News Found
      </h3>

      <p className={`text-center mb-6 max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        We couldn't find any news matching your search. Try adjusting your filters or search terms.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRetry}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
      >
        Try Again
      </motion.button>
    </motion.div>
  );
};

export const ErrorState = ({ error, onRetry }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-xl p-6 sm:p-8 border-l-4 border-red-500 ${
        isDark
          ? 'bg-red-900/20 text-red-300'
          : 'bg-red-50 text-red-800'
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">⚠️</span>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">Something went wrong</h3>
          <p className="mb-4 text-sm">{error || 'Failed to load news. Please try again later.'}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetry}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all"
          >
            Retry
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const NoResultsState = () => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <span className="text-5xl mb-4">🔍</span>
      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        No results found
      </h3>
      <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Try a different search or category
      </p>
    </motion.div>
  );
};
