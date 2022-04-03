import React from 'react';
import './GalleryImg.css'
const GalleryImg = ({imges}) => {
    const {details,img}=imges
    return (
        <div className='h-[30rem] relative overflow-hidden img-parent'>
            <div className='h-full w-full img'>
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className="img-details">
                <h1 className='font-bold text-white text-3xl mx-auto'>{details}</h1>
                <button className='py-3 px-7 bg-slate-500 text-white rounded-lg mt-4 text-2xl'>Details</button>
            </div>
        </div>
    );
};

export default GalleryImg;