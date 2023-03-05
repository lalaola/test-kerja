import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='col-10 mx-auto'>
            <h2>Temukan Jalanmu untuk Mencari Produk murah dan bagus</h2>
            <p className='text-white'>Jelajahi dan temukan tujuan belanjamu bersama ollaShop       
                #MungkinLoCocok jajan di ollaShop </p>
            <div className="row">
                {/* <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="ketik keyword yang ingin anda cari" aria-label="City" />
                </div> */}
                <div className="col-auto">
                    <NavLink to='daftar-product' type="submit" className="btn btn-dark">Telusuri Produk Sekarang</NavLink>
                </div>
            </div>

        </div>
    );
}

export default Hero;
