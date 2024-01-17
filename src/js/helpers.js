function createCardsMarkup(arr) {
  return arr.map((item) => ` 
  <li class="gallery-item">
  <div class="photo-card">
    <div class="gallery-image-box">
      <a class="gallery__link" href="${item.largeImageURL}">
        <img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}"/>
      </a>
    </div>
    <div class="stats">
      <p class="stats-item">
        <i class="material-icons">thumb_up</i>
        ${item.likes}
      </p>
  
      <p class="stats-item">
        <i class="material-icons">visibility</i>
        ${item.views}
      </p>
  
      <p class="stats-item">
        <i class="material-icons">comment</i>
        ${item.comments}
      </p>
  
      <p class="stats-item">
        <i class="material-icons">cloud_download</i>
        ${item.downloads}
      </p>
    </div>
  </div>
  </li>`).join('');
}

export { createCardsMarkup };