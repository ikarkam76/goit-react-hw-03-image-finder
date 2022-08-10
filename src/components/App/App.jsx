import { Component } from "react";
import { AppContainer } from "components/App/App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";


export class App extends Component {

  render() {
    return (
      <AppContainer>
        <SearchBar />
      </AppContainer>
    )
  }

};
