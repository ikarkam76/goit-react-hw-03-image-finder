import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onOpen }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onOpen={() => onOpen(largeImageURL)}
        />
      ))}
    </Gallery>
  );
};



