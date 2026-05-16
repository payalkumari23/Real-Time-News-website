import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useNewsContext } from './context/NewsContext';
import ModernNavbar from './Components/ModernNavbar';
import HeroSection from './Components/HeroSection';
import PremiumNewsCard from './Components/PremiumNewsCard';
import TrendingSidebar from './Components/TrendingSidebar';
import ModernFooter from './Components/ModernFooter';
import SkeletonLoader from './Components/SkeletonLoader';
import { EmptyState, ErrorState } from './Components/StateComponents';
import './App.css';

const AppContent = () => {
  const { news, fetchNews, loading, error } = useNewsContext();
  const { isDark } = useTheme();
  
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 9;

  // Fetch news on component mount or when category/search changes
  useEffect(() => {
    const query = searchQuery || selectedCategory;
    fetchNews(`/search?q=${query}&lang=en`);
    setCurrentPage(1);
    // fetchNews is stable enough here because it comes from context and will not change while the provider is mounted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // Pagination
  const filteredNews = news?.filter(
    (article) =>
      article.urlToImage &&
      article.title &&
      article.description
  ) || [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = filteredNews?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = Math.ceil((filteredNews?.length || 0) / itemsPerPage);

  const handleLoadMore = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    if (loading || currentPage >= totalPages) return;

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, currentPage, totalPages]);

  // Get featured news for hero
  const featuredNews = filteredNews[0] || null;
  const trendingNews = filteredNews.slice(0, 10) || [];

  if (error) {
    return (
      <div className="min-h-screen">
        <ModernNavbar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ErrorState error={error} onRetry={() => fetchNews(`/search?q=${selectedCategory}&lang=en`)} />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
    }`}>
      {/* Navbar */}
      <ModernNavbar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && <SkeletonLoader />}

        {!loading && (
          <>
            {/* Hero Section */}
            <HeroSection featuredNews={featuredNews} />

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* News Grid */}
              <div className="lg:col-span-2">
                {filteredNews.length > 0 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="grid sm:grid-cols-2 gap-6 mb-8"
                    >
                      {currentNews.map((newsItem, index) => (
                        <PremiumNewsCard
                          key={`${newsItem.url}-${index}`}
                          news={newsItem}
                          index={index}
                        />
                      ))}
                    </motion.div>

                    {/* Load More Button */}
                    {currentPage < totalPages && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mt-8"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleLoadMore}
                          className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                            isDark
                              ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                              : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
                          }`}
                        >
                          Load More Articles
                        </motion.button>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <EmptyState onRetry={() => fetchNews(`/search?q=${selectedCategory}&lang=en`)} />
                )}
              </div>

              {/* Trending Sidebar */}
              <div className="hidden lg:block">
                <TrendingSidebar trendingNews={trendingNews} />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <ModernFooter />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
