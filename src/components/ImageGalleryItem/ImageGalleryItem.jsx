import React from "react";
import { Image, ImageItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <ImageItem>
      <Image src={webformatURL} alt={tags} />
    </ImageItem>
  );
};

