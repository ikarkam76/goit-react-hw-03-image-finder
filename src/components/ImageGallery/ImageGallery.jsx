import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images }) => {
  return <Gallery>
    {images.map(({ id, webformatURL, tags }) => 
      <ImageGalleryItem id={id} webformatURL={webformatURL} tags={tags} />
    )}
  </Gallery>;
};



