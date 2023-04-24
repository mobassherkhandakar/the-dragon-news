import React, { useEffect, useState } from 'react';

const LeftNav = () => {
  const [catagories, setCatagories] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/catagories')
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(error=> console.log(error))
  },[])
  return (
    <div>
      this is a left nav
    </div>
  );
};

export default LeftNav;