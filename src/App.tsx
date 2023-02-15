import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'
import { layoutConfig } from './config/layout-config';
import { productsConfig } from './config/products-config';
import { Navigator } from './components/navigators/Navigator';
import { Box, Typography } from '@mui/material';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigator className={layoutConfig.className}
        routes={layoutConfig.routes} />}>
        <Route index element={<Home />}></Route>
        <Route path='customers' element={<Customers />} />
        <Route path='orders' element={<Orders />}></Route>
        

      </Route>
    </Routes>
  </BrowserRouter>


}
export default App;