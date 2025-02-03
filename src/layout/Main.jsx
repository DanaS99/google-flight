// src/layout/Main.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => (
  <div>
    <Navbar />  Navbar should only appear once
    <div className="main-content">
      <Outlet />  
    </div>
  </div>
);

export default Main;
