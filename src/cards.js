export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

  cardImage.addEventListener("click", () => openImg(cardImage));

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(cardElement) {
  cardElement.remove();
}

// открытие попап
export function openPopup(e) {
  e.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeEsc);
}
//закрытие попап
export function closePopup(e) {
  e.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeEsc);
}

//лайк
export function like(e) {
  e.classList.toggle("card__like-button_is-active");
}

//закрытие попап escape
export function closeEsc(e) {
  if (e.key === "Escape") {
    const closedPopup = document.querySelector(".popup_is-opened");
    closePopup(closedPopup);
  }
};

export function openImg(e) {
  e.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeEsc);
  // e.target.classList.toggle(".popup_is-opened ");
}
