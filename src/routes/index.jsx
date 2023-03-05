import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rute from './rute';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../component/navbar';

const Index = () => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Navbar />
        <Rute />
      </div>
    </BrowserRouter>
  );
}

export default Index;
