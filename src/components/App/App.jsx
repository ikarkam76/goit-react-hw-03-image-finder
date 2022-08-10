import { Component } from "react";
import { AppContainer } from "components/App/App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";

const axios = require('axios').default;


const API_URL = 'https://pixabay.com/api/';
const API_KEY = '28478003-fd100ae876bc055f23610276b';

export class App extends Component {
  state = {
    searchName: "",
    page: 1,
    hits: [],
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
    }
  };

  onLoadMore = () => {
    this.setState({page: this.state.page + 1}, this.fetchImage);
}

  onSearchImages = ev => {
    const searchName = ev.currentTarget[1].value.split(' ').join('+');
    this.setState({ searchName: searchName }, this.fetchImage);
  };

    fetchImage = async () => {
      try {
        const res = await axios.get(`${API_URL}?q=${this.state.searchName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        return this.setState({
          hits: [...this.state.hits, ...res.data.hits],
        });
      } catch (error) {
        return console.error(error.message);
      }
    }
  

  render() {
    return (
      <AppContainer>
        <SearchBar onSubmit={this.onSearchImages} />
        <ImageGallery images={this.state.hits} />
        {this.state.hits.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
      </AppContainer>
    );
  }
};
