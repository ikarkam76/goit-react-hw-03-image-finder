import React from "react";
import { Image, ImageItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ webformatURL, tags, onOpen }) => {
  return (
    <ImageItem onClick={onOpen}>
      <Image src={webformatURL} alt={tags} />
    </ImageItem>
  );
};

