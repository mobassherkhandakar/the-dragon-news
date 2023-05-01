import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Catagory = () => {
  const {id} = useParams()
  const catagoriesNews = useLoaderData()
  return (
    <div>
      {id && <h1>this is a catagory: {catagoriesNews.length} </h1>}
      <div>
        {
          catagoriesNews.map(news=> <NewsCard key={news._id} news={news}/>)
        }
      </div>
    </div>
  );
};

export default Catagory;