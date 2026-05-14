import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SkeletonLoader = () => {
  const shimmer = {
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 2s infinite',
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      
      {/* Hero Skeleton */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <div className="relative h-96 bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden mb-6" style={shimmer} />
      </motion.div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.1 }}
            className="space-y-4"
          >
            <div className="relative h-48 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden" style={shimmer} />
            <div className="space-y-2 p-4">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" style={shimmer} />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" style={shimmer} />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" style={shimmer} />
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mt-4" style={shimmer} />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SkeletonLoader;
