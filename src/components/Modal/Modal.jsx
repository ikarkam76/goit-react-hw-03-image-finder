import React, { Component } from "react";
import { ModalWindow, Overlay } from "./Modal.styled";

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ev => {
    if (ev.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>
    );
  }
}

