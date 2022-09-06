import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. 
// Разбей его на несколько подзадач:
// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента 
// галереи. Используй готовый код из первого задания.
// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить 
// ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям 
// из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения. */

const galleryBox = document.querySelector(".gallery");

const imgList = createImg(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", imgList);

function createImg(arrayOfItems) {
  return arrayOfItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`;
    }).join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: `alt`,
  captionDelay: 250,
});
