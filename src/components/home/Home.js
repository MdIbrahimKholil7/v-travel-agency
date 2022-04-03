import React from 'react';
import './Home.css'
import logo from '../image/photo-1529303875971-f52b9552f3b4.avif'
const Home = () => {
    return (
        <div className='hero-area'>
            <img src={logo} alt="" />
            <div className='hero-details text-center'>
                <h1 className='text-8xl mb-9 font-thin font-bold'>Enjoy Vacation With <span className='text-orange-400'>V-Travel</span></h1>
                <p className='text-5xl my-5'>Travel to the any corner of the world, without going around in circles.</p>
                <button className='rounded-lg mt-7 border-0 py-5 px-8 bg-orange-400 text-white text-4xl duration-300 ease-in btn'>Book A Tour</button>
            </div>
        </div>
    );
};

export default Home;