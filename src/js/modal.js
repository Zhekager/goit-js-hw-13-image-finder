import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onGalleryItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  e.preventDefault();

  const instance = basicLightbox.create(`<img src="${e.target.dataset.src}" alt="" />`);

  instance.show();
}

export { onGalleryItemClick };