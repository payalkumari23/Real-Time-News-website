import React from 'react';
import { useTheme } from '../context/ThemeContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = ({ featuredNews }) => {
  const { isDark } = useTheme();

  if (!featuredNews) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className={`relative rounded-2xl overflow-hidden backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50'
          : 'bg-gradient-to-br from-white/40 to-blue-50/40 border border-white/60'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />

        <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10 relative z-10">
          {/* Content */}
          <motion.div variants={containerVariants} className="flex flex-col justify-center">
            <motion.div
              variants={itemVariants}
              className="inline-block w-fit mb-4"
            >
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white">
                🔥 BREAKING NEWS
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {featuredNews.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {featuredNews.description}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              variants={itemVariants}
              className={`flex flex-wrap items-center gap-4 mb-6 text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <span>{featuredNews.source?.name || 'News Source'}</span>
              <span>•</span>
              <span>{new Date(featuredNews.publishedAt).toLocaleDateString()}</span>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(featuredNews.url)}
              className="w-fit px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Read Full Story →
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative rounded-xl overflow-hidden h-64 sm:h-80 md:h-96"
          >
            <img
              src={featuredNews.urlToImage || 'https://via.placeholder.com/600x400?text=News'}
              alt={featuredNews.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
