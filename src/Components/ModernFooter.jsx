import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ModernFooter = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', url: '#' },
    { icon: 'f', label: 'Facebook', url: '#' },
    { icon: '📸', label: 'Instagram', url: '#' },
    { icon: '🔗', label: 'LinkedIn', url: '#' },
  ];

  const quickLinks = [
    { label: 'About Us', url: '#' },
    { label: 'Contact', url: '#' },
    { label: 'Careers', url: '#' },
    { label: 'Privacy Policy', url: '#' },
  ];

  const categories = [
    { label: 'Technology', url: '#' },
    { label: 'Business', url: '#' },
    { label: 'Entertainment', url: '#' },
    { label: 'Sports', url: '#' },
  ];

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mt-20 transition-colors duration-300 border-t ${
        isDark
          ? 'bg-gray-900/50 border-gray-800'
          : 'bg-gray-50/50 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                📰
              </div>
              <span className="font-bold text-lg">NewsHub</span>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Your trusted source for breaking news, in-depth analysis, and stories that matter.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className={`text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <a
                    href={cat.url}
                    className={`text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Get the latest news delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg text-sm outline-none transition-all ${
                  isDark
                    ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                }`}
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg transition-all"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} py-8`}
        >
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white'
                    : 'bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white'
                }`}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            © 2024 NewsHub. All rights reserved. | Powered by NewsHub
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default ModernFooter;
