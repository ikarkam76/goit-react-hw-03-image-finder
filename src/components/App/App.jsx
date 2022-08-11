import { Component } from "react";
import { AppContainer } from "components/App/App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";

const axios = require('axios').default;


const API_URL = 'https://pixabay.com/api/';
const API_KEY = '28478003-fd100ae876bc055f23610276b';

export class App extends Component {
  state = {
    searchName: "",
    page: 1,
    hits: [],
    visible: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchName !== this.state.searchName) {
      this.setState({hits: [], page: 1})
    }
  };

  onLoadMore = () => {
    this.setState({page: this.state.page + 1, visible: true}, this.fetchImage);
}

  handleSubmit = ev => {
    const searchName = ev.currentTarget[1].value.split(' ').join('+');
    if (!searchName) {
      alert('Wow! The search field must not be empty!');
    } else {
      this.setState({ searchName: searchName, visible: true }, this.fetchImage);
    }
  };

  fetchImage = async () => {
    try {
      const res = await axios.get(`${API_URL}?q=${this.state.searchName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return this.setState({
        hits: [...this.state.hits, ...res.data.hits], 
        visible: false
      });
    } catch (error) {
      return console.error(error.message);
    }
  }
  

  render() {
    return (
      <AppContainer>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.hits} />
        {this.state.hits.length > 0 && <Button onLoadMore={this.onLoadMore} />}
        <Loader visible={this.state.visible} />
      </AppContainer>
    );
  }
};
