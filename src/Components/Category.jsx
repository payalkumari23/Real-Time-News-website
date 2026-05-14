import React from 'react'
import { useNewsContext } from '../context/NewsContext'




const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];


  const handleClick = async (e) => {
    const category = e.target.value;
    if (!fetchNews || !setNews) return;

    const data = await fetchNews(`/everything?q=${category}`);
    if (data?.articles) {
      setNews(data.articles);
    }
  }

  return (

    <div className={`${className} bg-white shadow-md border-b border-gray-200`}>
    <div className="flex justify-center flex-wrap gap-2 p-4">
      {categories.map((category, index) => {
        return (

          <button 
            onClick={handleClick} 
            key={category} 
            value={category} 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full btn-animate shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 active:scale-95 fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {category}
          </button>
        )
      })}
    </div>
    </div>

  )
}

export default Category
