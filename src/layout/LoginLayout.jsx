import React from 'react';
import NavigationBar from '../pages/Shered/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
    </div>
  );
};

export default LoginLayout;