import { Modal } from "components/Modal/Modal";
import React from "react";
import { useState } from "react";
import { Image, ImageItem } from "./ImageGalleryItem.styled";



export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isOpenModal, setModalOpen] = useState(false);

  const toggleModal = (ev) => {
    if (ev.code === "Escape") {
      setModalOpen(false);
    }
  }
 
  if (isOpenModal) {
    window.addEventListener('keydown', toggleModal);
  } else {
    window.removeEventListener("keydown", toggleModal);
  }

  return (
    <div>
      <ImageItem onClick={() => setModalOpen(true)}>
        <Image src={webformatURL} alt={tags} />
      </ImageItem>
      {isOpenModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={setModalOpen}
        />
      )}
    </div>
  );
};

