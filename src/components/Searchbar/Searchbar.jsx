import React, { Component } from "react";
import { Button, ButtonLabel, Form, Input, Searchbar } from "./Searchbar.styled";
import { FcSearch } from 'react-icons/fc';


export class SearchBar extends Component {

  render() {
    return (
      <Searchbar>
        <Form>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
            <FcSearch />
          </Button>
          <Input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Searchbar>
    );
  }
}


{/* <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>; */}