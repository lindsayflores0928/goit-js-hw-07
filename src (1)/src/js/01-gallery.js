import { galleryItems } from './gallery-items.js';
// Change code below this line

const ul = document.querySelector(".gallery");

galleryItems.forEach(item => {
    const { description, original, preview } = item;
    const li = `
        <li class="gallery__item">
            <a class="gallery__link" href="javascript:void(0);">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
    `;

    ul.innerHTML += li;
});

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        let imgSrc = e.target.dataset.source;
        let bigPicture = basicLightbox.create(`<img src="${imgSrc}" width="800" height="600">`);
        bigPicture.show();
        document.addEventListener("keydown", (e) => { 
            if (e.key === "Escape") bigPicture.close();
        });
    }
});