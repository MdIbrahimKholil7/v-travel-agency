import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGallery } from '../../App';

const GalleryImgDetails = () => {
    const { id } = useParams()
    console.log(typeof id)
    const { gallery } = useContext(ContextGallery)
    console.log(gallery)
    const findImg = gallery.find(img => img.id === +id)
    const { img, details } = findImg
    console.log(findImg)
    return (
        <div className='w-[90rem] mx-auto h-[90vh] flex justify-between items-center mt-8' >
            <div className='flex justify-center items-center h-full w-full'>
                <div className='w-[80%] mx-auto'>
                    <div className='w-[40rem] h-[30rem] mx-auto'>
                        {<img className='w-full h-full' src={img} alt="" />}
                    </div>
                   <div className=' mt-8 w-[55%] mx-auto'>
                       <h1 className='text-3xl font-bold mb-8 text-center'>{details}</h1>
                       <p className='text-2xl leading-9 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique maxime minus ratione, minima enim sunt natus vero debitis distinctio. At perferendis sit dignissimos quaerat vero dolores adipisci obcaecati molestiae odit. Aut ipsam quos autem corporis labore porro quam ut laborum.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};
export default GalleryImgDetails;