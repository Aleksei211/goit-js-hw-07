import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const itemOfGallery = createItemOfGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemOfGallery);
//gallery.append(...itemOfGallery)
let openOriginalImage;

function createItemOfGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
   
    />
  </a>
</div>`
    }).join('')
  
}

 gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    openOriginalImage = basicLightbox.create(`
 		<img src="${event.target.dataset.source} ">
 	`)
     openOriginalImage.show()
 });