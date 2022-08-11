import React from "react";
import { ModalWindow, Overlay } from "./Modal.styled";

export const Modal = (url, tags) => {
  return (
    <Overlay>
      <ModalWindow>
        <img src={url} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
}

