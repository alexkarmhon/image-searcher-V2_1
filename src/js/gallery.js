import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"


import ImageApiService from "./imagesAPIservice";
import { createCardsMarkup } from "./helpers";


const formInput = document.getElementById('search-form');
const galleryLst = document.getElementById('gallery-list');

const imagesAPI = new ImageApiService();

function renderGallery(data) {
  galleryLst.insertAdjacentHTML("beforeend", createCardsMarkup(data));
}

function clearGallery() {
  galleryLst.innerHTML = '';
}

// function onCardClick(e) {
//   if (e.target.nodeName !== 'IMG') { reset };

//   const image = e.target.dataset.large;
//   console.dir(image);
// }

async function onInputSearch(e) {
  e.preventDefault();
  const value = e.target.elements.query.value.trim();

  imagesAPI.query = value;
  const { hits } = await imagesAPI.fetchImagesByQuery();
  renderGallery(hits);
  const gal = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
  })
}

formInput.addEventListener('submit', onInputSearch);