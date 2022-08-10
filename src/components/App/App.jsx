import { Component } from "react";
import { AppContainer } from "components/App/App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";


export class App extends Component {


  onSearchName = (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget[1].value);
  }


  render() {
    return (
      <AppContainer>
        <SearchBar onSubmit={this.onSearchName} />
      </AppContainer>
    )
  }

};
