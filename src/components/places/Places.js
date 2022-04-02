// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Places = () => {
    const [images, setImage] = useState([])
    useEffect(() => {
        fetch('image.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])

    // asian image fetch 
    const [asianImage, setAsiaImage] = useState([])
    useEffect(() => {
        fetch('asiaImage.json')
            .then(res => res.json())
            .then(data => setAsiaImage(data))
    }, [])

    return (
        <div className="w-3/4 mx-auto pt-[8rem]">
            <h1 className="text-center font-bold text-5xl mb-[8rem] text-slate-800">Popular Places For Your Tour</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <div className="w-3/4 h-[70vh]" >

                    {
                        images.map(image => <SwiperSlide className="w-3/4 h-[60vh]" key={image.id}><img className="w-full h-[70vh] object-cover" src={image.img} alt="" /></SwiperSlide>)
                    }
                </div >
            </Swiper>

            <div className="w-full mt-20">
                <h1 className="text-4xl font-bold">Asia's Most Popular Places For Your Tour</h1>

                <div className="w-[100%] mx-auto h-[60vh] mt-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            asianImage.map(image => <SwiperSlide><div>
                                                 <img className='h-[30rem] object-cover' src={image.img} alt="" />                                   <h1 className="mt-8 text-4xl mb-[7rem]">{image.details}</h1>    
                                </div></SwiperSlide>)
                       }
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Places;