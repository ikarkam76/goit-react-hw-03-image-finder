import React from "react";
import { Button, ButtonLabel, Form, Input, Searchbar } from "./Searchbar.styled";
import { FcSearch } from 'react-icons/fc';


export const SearchBar = ({onSubmit}) => {
  return (
    <Searchbar>
      <Form onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(ev);
      }}>
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
          <FcSearch />
        </Button>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Searchbar>
  );
};