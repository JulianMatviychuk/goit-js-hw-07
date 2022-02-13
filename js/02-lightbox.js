import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = document.querySelector(".gallery");

renderGallery();

function renderGallery() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  `
    )
    .join("");

  imageGallery.insertAdjacentHTML("beforeend", markup);
}

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
