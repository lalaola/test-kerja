import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="container pt-3 d-flex justify-content-between align-items-center">
                <div className="logo py-2"><NavLink to='/' ><h4 >nutech-integrasi</h4></NavLink></div>
                <div className="logo py-2"><NavLink to='daftar-product' ><p href="">Daftar Produk </p></NavLink></div>
                      </div>
        </div>
    );
}

export default Navbar;
