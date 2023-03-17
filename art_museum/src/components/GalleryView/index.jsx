import React from "react";
import { useParams } from "react-router-dom";

function GalleryView(props) {
    const {galleryId} = useParams();
    console.log(galleryId);
    console.log(props.galleries);
    const gallery = props.galleries.find((gallery) => {
        // console.log("galleryid: ", gallery.galleryid);
        // console.log("galleryId: ", galleryId);
        return gallery.galleryid === parseInt(galleryId);

        
    });
    console.log(gallery);

    return (
        <h2>{gallery.name}</h2>
    )
}

export default GalleryView