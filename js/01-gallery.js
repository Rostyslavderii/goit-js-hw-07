import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения 
// в модальном окне. Посмотри демо видео работы галереи.
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:
//  1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//  2. Реализация делегирования на div.gallery и получение url большого изображения.
//  3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr !!
//  и добавь в проект ссылки на минифицированные (.min) файлы библиотеки. !!!
//  4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//  5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// 6. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox. 


const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", Modal); //!

const imgList = createImg(galleryItems);



function createImg(arrayOfItems) {
  return arrayOfItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", imgList);
let instance;

function Modal(event) {
  event.preventDefault();
  const imageEl = event.target.classList.contains("gallery__image");
  if (!imageEl) {
    return;
  }
instance = basicLightbox
    .create(
      `<img src = "${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600" />`
      ,{    onShow: instance => {
          document.addEventListener('keydown', closeModal);
        },
        onClose: instance => {
          document.removeEventListener('keydown', closeModal);
        },
      }).show();
}

// ???
// function closeModal(e) {
//     if (e.code === "Escape") {
//         instance.close();
//       }
//     }