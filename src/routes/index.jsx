import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rute from './rute';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../component/navbar';

const Index = () => {
    return (
        <BrowserRouter>
        <Navbar/>
          <Rute/>
        </BrowserRouter>
    );
}

export default Index;
