import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = document.querySelector('.gallery');

renderGallery();

function renderGallery() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) => `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `
    )
    .join('');

  imageGallery.insertAdjacentHTML('beforeend', markup);
}

imageGallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    event.preventDefault();
    showBigPicture(event.target.dataset.source);
  }
}

let instance;

function showBigPicture(source) {
  instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
`,
    {
      onShow: instance => {
        addEscCloseButton();
      },
      onClose: instance => {
        removeEscCloseButton();
      },
    }
  );
  instance.show();
}

function addEscCloseButton() {
  window.addEventListener('keydown', onEscClick);
}

function removeEscCloseButton() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
