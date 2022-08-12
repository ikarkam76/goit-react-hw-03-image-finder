import { Component } from "react";
import { AppContainer } from "components/App/App.styled";
import { SearchBar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { getImages } from "components/services/getImages";
import { Modal } from "components/Modal/Modal";

export class App extends Component {
  state = {
    searchName: '',
    page: 0,
    hits: [],
    visible: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.searchName !== this.state.searchName) {
      this.setState({ hits: [], page: 1 });
    }
  };

  fetchImages = () => {
    getImages(this.state.searchName, this.state.page)
      .then(val =>
        this.setState({
          hits: [...this.state.hits, ...val.data.hits],
          visible: false,
        })
      )
      .catch(() => alert('Something went wrong'));
  };

  onLoadMore = () => {
    this.setState(
      { page: this.state.page + 1, visible: true },
      this.fetchImages
    );
  };

  handleSubmit = ev => {
    const searchName = ev.currentTarget[1].value.trim().split(' ').join('+');
    if (!searchName) {
      alert('Wow! The search field must not be empty!');
    } else {
      this.setState(
        { page: this.state.page + 1, searchName: searchName, visible: true },
        this.fetchImages
      );
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleOpenModal = (ev) => {
    this.toggleModal();
    const modalImage = this.state.hits.find(
      item => item.webformatURL === ev.target.src
    ).largeImageURL;
    this.setState({ modalImage });
  };

  render() {
    const { hits, visible, showModal, modalImage } = this.state;
    return (
      <AppContainer>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt={hits.tags} />
          </Modal>
        )}
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={hits} onOpen={ev => this.handleOpenModal(ev)} />
        {hits.length > 0 && <Button onLoadMore={this.onLoadMore} />}
        <Loader visible={visible} />
      </AppContainer>
    );
  }
};
