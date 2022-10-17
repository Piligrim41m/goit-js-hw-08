// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery')
const makeImages = galleryItem => {
    return galleryItems.map(galleryItem => {
        const newElementCard = document.createElement('div');
        newElementCard.classList.add("gallery__item");
        const newElementLink = document.createElement('a');
        newElementLink.classList.add("gallery__link");
        newElementLink.href = galleryItem.original
        newElementCard.appendChild(newElementLink)
        const imageElement = document.createElement('img');
        imageElement.classList.add('gallery__image');
        imageElement.setAttribute('src', galleryItem.preview)
        imageElement.setAttribute('alt', galleryItem.description)
        newElementLink.appendChild(imageElement)
        // const imageElement = 
        // `<img class='gallery__image'
        //   src='${galleryItem.preview}' 
        //   alt='${galleryItem.description}'>`;
        // newElementLink.insertAdjacentHTML("beforeend", imageElement)
        return newElementCard;
    })
}
const elements = makeImages(galleryItems);
console.log(elements)
galleryRef.append(...elements)

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});