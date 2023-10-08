import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const pageSize = 3; // Number of articles to load per page

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_APINEWS; // Replace with your News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${page}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Append new articles to the existing list
        setNews((prevNews) => [...prevNews, ...response.data.articles]);
        console.log(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [page]);

  // Function to load more articles
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='flex gap-10 flex-wrap'>
      {news.map((article, index) => (
        <div key={index} className="max-w-sm h-fit mt-12 bg-verdeScuro border border-verdeChiaro rounded-lg shadow">
          <img className="rounded-t-lg" src={article.urlToImage} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-crema">{article.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description}</p>
            <a href={article.url} className="inline-flex items-center px-3 py-2 text-sm font-black text-center text-nero bg-verdeChiaro rounded-lg focus:ring-4 focus:outline-none ">
              Leggi di più
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
      <div className="text-center mt-4">
        <button onClick={loadMore} className="bg-verdeScuro text-bianco py-2 px-4 rounded-lg hover:bg-blue-600">
          Carica altri
        </button>
      </div>
    </div>
  );
};

export default News;
