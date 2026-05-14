import React, { useEffect } from 'react'
import { useNewsContext } from '../context/NewsContext'
import Loader from '../Components/Loader';






const News = ({ className }) => {

  const { news, fetchNews, loading } = useNewsContext();




  useEffect(() => {
    fetchNews(); // fetchNews already sets news in context
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loader className=" md:w-48 md:h-48 h-32 w-32 justify-content " />
  }



  return (



    <div className={`${className} flex justify-center flex-wrap gap-6 p-8`}>

      {news?.map((newsDetails, index) => {
        if (!newsDetails.urlToImage || !newsDetails.title || !newsDetails.description) {
          return null; // Skip articles with missing data
        }
        return <NewsCard key={index} details={newsDetails} index={index} />;
      })}
    </div>

  )
}


const NewsCard = ({ details, index }) => {


  return (
    <div 
      className="card bg-white w-80 shadow-md hover:shadow-2xl card-hover rounded-xl overflow-hidden fade-in transition-all duration-500 border border-gray-100"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <figure className="relative overflow-hidden bg-gray-200 h-48">
        <img 
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
          src={details?.urlToImage}
          alt={details?.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </figure>
      <div className="card-body p-5 flex flex-col justify-between h-full">
        <div>
          <h2 className="card-title line-clamp-2 text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">{details?.title}</h2>
          <p className="line-clamp-3 text-gray-600 text-sm leading-relaxed mt-2">{details?.description}</p>
        </div>
        <div className="card-actions justify-end mt-4">
          <button 
            onClick={() => window.open(details.url)}
            className="btn bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none btn-animate hover:from-blue-600 hover:to-indigo-600 shadow-md"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  )
}

export default News
