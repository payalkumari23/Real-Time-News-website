import React from 'react'
import api from '../config/axios'


//create context
//create provider
//use context in the component

const NewsContext = React.createContext();

const NewsContextProvider = ({ children }) => {

  const [news, setNews] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(null);

  const fallbackArticles = [
    {
      source: { id: null, name: 'NewsHub' },
      author: 'NewsHub Editorial',
      title: 'Premium news experience arrives in your browser',
      description: 'A beautifully designed news hub now supports dark mode, filters, and animated cards for a high-end reading experience.',
      url: 'https://example.com/premium-news-experience',
      urlToImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      publishedAt: new Date().toISOString(),
      content: 'Experience a responsive news feed with elegant glassmorphism styling and smooth motion.',
    },
    {
      source: { id: null, name: 'Today News' },
      author: 'Today News Team',
      title: 'Local news updates now visible with fallback content',
      description: 'The app now displays useful fallback stories when the API is unavailable, preserving user experience.',
      url: 'https://example.com/local-news-updates',
      urlToImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      publishedAt: new Date().toISOString(),
      content: 'Offline fallback data ensures the interface still works and the app remains interactive.',
    },
  ];

  const fetchNews = async (url = `/everything?q=india`) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`);
      const articles = response.data.articles;
      setNews(articles);
      return { articles, error: null };
    } catch (error) {
      console.error('Error fetching news:', error);
      const errorMessage = error.response?.data?.message || 'Failed to fetch news. Showing fallback stories.';
      setError(errorMessage);
      setNews(fallbackArticles);
      return { articles: fallbackArticles, error: errorMessage };
    } finally {
      setLoading(false);
    }

  }


  return (
    <NewsContext.Provider value={{ news, setNews, fetchNews, loading, error }}>
      {children}
    </NewsContext.Provider>
  )
}

const useNewsContext = () => {
  const context = React.useContext(NewsContext);
  if (!context) {
    throw new Error('useNewsContext must be used within NewsContextProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { NewsContextProvider, useNewsContext, NewsContext }


