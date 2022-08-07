// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryIm = galleryMarkup(galleryItems);
function galleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
         <div class="gallery__item">
         <a class="gallery__item"
         href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>
  
</div>`
     }

    ).join('')
} 

gallery.insertAdjacentHTML('beforeend', galleryIm);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

