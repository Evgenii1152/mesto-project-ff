import {openPopup} from "./modal.js";
// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: Функция создания карточки

export function createCard(link, name, deleteCard, like, openImg) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector(".card__title").textContent = name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => deleteCard(cardElement));

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", () => like(cardLikeBtn));

  cardImage.addEventListener("click", () => openImg(link, name));

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(cardElement) {
  cardElement.remove();
};

//лайк
export function like(e) {
  e.classList.toggle("card__like-button_is-active");
};



