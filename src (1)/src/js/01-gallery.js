import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');

  // Step 1: Rendering Gallery Items
  galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.dataset.source = item.original; // Storing large image URL
    image.alt = item.description;

    link.appendChild(image);
    listItem.appendChild(link);
    galleryList.appendChild(listItem);
  });

  // Step 2, 3, 4, 5: Open modal window, replace image src, close modal on Escape key
  galleryList.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
      const largeImageUrl = event.target.dataset.source;
      const instance = basicLightbox.create(`
        <img src="${largeImageUrl}" alt="">
      `);
      instance.show();

      // Replace image src with large image URL
      instance.element().querySelector('img').src = largeImageUrl;

      // Close modal window on Escape key press
      const closeOnEscape = (event) => {
        if (event.key === 'Escape') {
          instance.close();
          document.removeEventListener('keydown', closeOnEscape);
        }
      };
      document.addEventListener('keydown', closeOnEscape);
    }
  });
});

