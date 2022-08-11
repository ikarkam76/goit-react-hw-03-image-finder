import React from "react";
import { ModalWindow, Overlay } from "./Modal.styled";

export const Modal = ({largeImageURL, tags, onClose}) => {
  return (
    <Overlay onClick={(ev) => {
      if (ev.target === ev.currentTarget) {
        onClose(false);
      }
    }}>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
};

