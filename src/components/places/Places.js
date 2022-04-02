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



    return (
        <div className="w-3/4 mx-auto">
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
                        images.map(image => <SwiperSlide className="w-3/4 h-[60vh]" key={image.id}><img className="w-full h-[70vh] object-cover" src={image.img} alt="image" /></SwiperSlide>)
                    }
                </div>
            </Swiper>

            <div className="w-[300px] h-[300px]">


            </div>
        </div>
    );
};

export default Places;