import "./index.css";
import {
  createCard,
  deleteCard,
  like
} from "./components/cards.js";

import { openPopup, closePopup} from "./components/modal.js";

import {initialCards} from "./components/card.js";  

// @todo: DOM узлы
const content = document.querySelector(".places__list");
const cardAddBtn = document.querySelector(".profile__add-button");
const editProfileBtn = document.querySelector(".profile__edit-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupEdit = document.querySelector(".popup_type_edit");
const profileDescription = document.querySelector(".profile__description");
const formNewPlace = document.forms.newPlace;
const inputNamePlace = formNewPlace.elements.placeName;
const inputLinkPlace = formNewPlace.elements.link;
const formElementTypeEdit = document.forms.editProfile;
const nameInput = formElementTypeEdit.elements.name;
const jobInput = formElementTypeEdit.elements.description;
const profileTitle = document.querySelector(".profile__title");

//открытие попап
cardAddBtn.addEventListener("click", () => {
  openPopup(popupNewCard);
});

editProfileBtn.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
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

formElementTypeEdit.addEventListener("submit", (e) => {
  handleFormSubmit(e), closePopup(popupEdit);
});

formNewPlace.addEventListener("submit", (e) => {
  createNewCard(e), closePopup(popupNewCard);
  e.target.reset();
});

//Изменение страницы через попап
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
}


//создание новой карточки
function createNewCard(evt) {
  evt.preventDefault();
  const link = inputLinkPlace.value;
  const name = inputNamePlace.value;

  content.prepend(createCard(link, name, deleteCard, like, openImg));
};

//открытие картинки
function openImg(cardLink, cardName) {
  const popupTypeImg = document.querySelector(".popup_type_image");
  const popupImg = document.querySelector(".popup__image");
  const popupNameImg = document.querySelector(".popup__caption");
  popupImg.src = cardLink;
  popupNameImg.textContent = cardName;
  openPopup(popupTypeImg);
};
