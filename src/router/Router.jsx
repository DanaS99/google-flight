import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';

const Router = () => (
  <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />  
    </Route>
  </Routes>
);

export default Router;
