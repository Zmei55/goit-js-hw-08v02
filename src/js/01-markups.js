import { galleryItems } from './gallery-items';
import refs from './refs';

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
refs.galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join('');
}
