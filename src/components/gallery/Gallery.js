import React, { useContext } from 'react';
import { ContextGallery } from '../../App';
import GalleryImg from '../galleryImg/GalleryImg';

const Gallery = () => {
    const {gallery}=useContext(ContextGallery)
    // console.log(gallery)
    return (
        <div className='mb-[5rem] px-8'>
            <h1 className='mt-[6rem] text-5xl text-center mb-[8rem] font-bold'>Tour Gallery</h1>
            <div className='max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center  md:grid-cols-3 gap-10'>
                {
                    gallery.map(img => <GalleryImg 
                        key={img.id}
                        imges={img}
                    /> )
                }
            </div>
        </div>
    );
};
export default Gallery;