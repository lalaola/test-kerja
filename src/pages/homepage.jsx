import React from 'react';
import Hero from '../component/hero';
import bag from '../asset/test1.png'
const Homepage = () => {
    
    return (
        <div className=' home '>
            <div className=" text col-8 col-md-6"> <Hero /></div>
            <div className="gambar  col-md-6 col-4 bg-danger d-flex ">
                <div className="col-12 d-flex pe-4 text col-md-5 align-items-end mb-5 ">
                    <p className='col-12 ps-4 text-end'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque repellendus quibusdam! Aliquid sapiente perferendis eius, non ad error amet officiis, odit numquam quis animi dolorem architecto ipsa nesciunt dolor?
                    </p>
                </div>
                <div className="col-12 col-md-7">
                    <img className='img-fluid' src={bag} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
