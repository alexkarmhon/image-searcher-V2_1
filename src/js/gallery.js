import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"


import ImageApiService from "./imagesAPIservice";
import { createCardsMarkup } from "./helpers";


const formInput = document.getElementById('search-form');
const galleryLst = document.getElementById('gallery-list');

const imagesAPI = new ImageApiService();

// simpleLightbox
const gal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
})

// inf scroll
const target = document.getElementById('guard');

const options = {
  root: null,
  rootMargin: "400px",
  threshold: 1.0
}

const observer = new IntersectionObserver(loadMore, options)

function loadMore(entries, observer) {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      imagesAPI.incrementPage();
      const { hits, totalHits } = await imagesAPI.fetchImagesByQuery();
      renderGallery(hits); 
      gal.refresh();
      if (hits.length * imagesAPI.page >= totalHits) { observer.unobserve(target) };
    }
  })
}

function renderGallery(data) {
  galleryLst.insertAdjacentHTML("beforeend", createCardsMarkup(data));
  observer.observe(target);
}

function clearGallery() {
  galleryLst.innerHTML = '';
}

async function onInputSearch(e) {
  e.preventDefault();
  clearGallery();
  const value = e.target.elements.query.value.trim();
  if (!value) { return };
  
  imagesAPI.query = value;
  const { hits } = await imagesAPI.fetchImagesByQuery();
  renderGallery(hits);
  gal.refresh()
}




formInput.addEventListener('submit', onInputSearch);