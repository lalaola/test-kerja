import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages';
import ProductList from '../pages/productList';
import Search from '../pages/search';

const Rute = () => {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/daftar-product" element={<Search/>}/>

        </Routes>
    );
}

export default Rute;
