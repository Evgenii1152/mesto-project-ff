import "./index.css";
import {
  initialCards,
  createCard,
  deleteCard,
  openPopup,
  closePopup,
  like,
  openImg,
} from "./cards.js";

// @todo: DOM узлы
const content = document.querySelector(".places__list");
const cardAddBtn = document.querySelector(".profile__add-button");
const editProfileBtn = document.querySelector(".profile__edit-button");
const popups = document.querySelectorAll(".popup");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupEdit = document.querySelector(".popup_type_edit");
const popupImg = document.querySelector(".popup_type_image");

//открытие попап
cardAddBtn.addEventListener("click", () => {
  openPopup(popupNewCard);
});

editProfileBtn.addEventListener("click", () => {
  openPopup(popupEdit);
});

//
popups.forEach(function (popups) {
  popups.classList.add(".popup_is-animated");

  popups.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      const openModal = document.querySelector(".popup_is-opened");
      closePopup(openModal);
    }
  });
  const popupCloseBtn = popups.querySelector(".popup__close");
  popupCloseBtn.addEventListener("click", () => {
    closePopup(popups);
  });
});

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const cardElement = createCard(
    item.link,
    item.name,
    deleteCard,
    like,
    openImg
  );
  content.append(cardElement);
});


