const axios = require('axios').default;

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '28478003-fd100ae876bc055f23610276b';

export const getImages = async (name, page) => {
  try {
    const response = await axios.get(
      `${API_URL}?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response;
  } catch (error) {
    return console.error(error.message);
  }
};