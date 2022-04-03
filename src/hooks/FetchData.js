import { data } from "autoprefixer"
import { useEffect, useState } from "react"

const FetchData=()=>{
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
        fetch('gallery.json')
        .then(res => res.json())
        .then(data => {
            
            setGallery(data)})
            console.log(gallery)
    },[])
    return [gallery,setGallery]
}

export {FetchData}
