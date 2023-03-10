import React from 'react';
import Hero from '../component/hero';
import bag from '../asset/test1.png'
import { motion } from 'framer-motion';
const Homepage = () => {
    return (
        <motion.div
        initial={{opacity: 0 }}
        animate={{ opacity :1}}
        className=' home '>
            <div className=" text col-10 mx-auto col-md-6"> <Hero /></div>
            <div className="gambar  col-md-6 col-4 bg-danger d-flex ">
                <div className="col-12 d-flex pe-4 text col-md-6 align-items-end mb-5 ">
                    <p className='col-12 ps-4 text-end'> PT. Nutech Integrasi merupakan bagian dari TelkomGroup, berkomitmen menjadikan Indonesia sebagai pusat inovasi digital terbaik di Asia Tenggara 
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={bag} alt="" />
                </div>
            </div>
        </motion.div>
    );
}

export default Homepage;
