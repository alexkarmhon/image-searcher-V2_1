const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '26677843-2a3fc57e20ccdb9e08e3bd20d';

const params = {
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true
}

const queryParams = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');

export default class ImageApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchImagesByQuery() {
    const data = await fetch(`${BASE_URL}?key=${API_KEY}&q=${this.query}&page=${this.page}&${queryParams}`);
    return await data.json();
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

// Приклад використання
// const images = new ImageApiService();
// images.query = 'cat';
// images.fetchImagesByQuery()