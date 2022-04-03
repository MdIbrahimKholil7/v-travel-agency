import React from 'react';
import about from '../image/about.png'
import './About.css'
const About = () => {

    return (
        <div className='max-w-[93rem] h-[90vh] mx-auto mt-12 px-9 mb-10'>
            <h1 className='text-center text-5xl font-bold mb-[4rem] md:mb-0'>Who We Are?</h1>
            <div className='w-full h-full  md:flex justify-between items-center'>
                <div className="img w-[40rem] mx-auto md:mx-0">
                    <img className=' rounded-lg' src={about} alt="" />
                </div>
                <div className="details w-[42rem] mx-auto md:mx-0 mt-[6rem] ">
                    <h1 className='text-4xl mb-5 text-center md:text-left'>We Are Travel Experts</h1>
                    <p className='text-2xl leading-10' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                    <button className='rounded-lg mt-7 border-0 py-5 px-8 bg-orange-400 text-white text-4xl duration-300 learn-btn ease-in btn mx-auto md:mx-0'>Book A Tour</button>
                </div>
               
            </div>
        </div>
    );
};

export default About;