import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LeftNews from '../../Home/Home/LeftNews/LeftNews';

const LeftNav = () => {
  const [catagories, setCatagories] = useState([])
  useEffect(()=>{
    fetch('https://the-dragon-news-server-mobassherkhandakar.vercel.app/catagories')
    .then(res=> res.json())
    .then(data => setCatagories(data))
    .catch(error=> console.log(error))
  },[])
  return (
    <div>
      <h4>All Caterogy</h4>
      <div>
        {
          catagories.map(caragory=> <p key={caragory.id}>
            <NavLink to={`/catagory/${caragory.id}`} className="text-decoration-none ps-3">{caragory.name}</NavLink>
          </p>)
        }
      </div>
      <div>
        <LeftNews/>
      </div>
    </div>
  );
};

export default LeftNav;