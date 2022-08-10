import React from "react";
import { LoadButton } from "./Button.styled";

export const Button = ({onLoadMore}) => {
    return <LoadButton type="button" onClick={onLoadMore}>Load more</LoadButton>;
}