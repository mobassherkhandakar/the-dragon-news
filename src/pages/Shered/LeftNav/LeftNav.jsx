import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  const [catagories, setCatagories] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/catagories')
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
    </div>
  );
};

export default LeftNav;