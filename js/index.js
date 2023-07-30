// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// const galleryBlock = document.querySelector('.gallery');

// function createGallaryMark(pictures) {
//   return pictures.map((picture) => `<div class="gallery__item">
//         <a class="gallery__link" href="${picture.original}">
//             <img
//               class="gallery__image"
//               src="${picture.preview}"
//               data-source="${picture.original}"
//               alt="${picture.description}"
//             />
//           </a>
//       </div>`
//     )
//     .join("");
// }

// const addGallaryMark = createGallaryMark(galleryItems);

// galleryBlock.innerHTML = addGallaryMark;

// galleryBlock.addEventListener("click", onPictureClick);

// function onPictureClick(e) {
//   blockStandartAction(e);

//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src="${e.target.dataset.source}" width="800" height="600">`
//   );

//   instance.show();

//   galleryBlock.addEventListener("keydown", (e) => {
//     if (e.code === "Escape") {
//       instance.close();
//       }
//     })

// }

// function blockStandartAction(e) {
//   e.preventDefault();
// }
