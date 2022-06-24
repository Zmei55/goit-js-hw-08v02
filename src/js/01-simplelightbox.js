import SimpleLightbox from 'simplelightbox';
import refs from './refs';

const gallery = new SimpleLightbox('.gallery a');

refs.galleryContainer.addEventListener('click', gallery.on('show.simplelightbox'));
