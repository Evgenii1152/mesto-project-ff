// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const content = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(link, name) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector(".card__title").textContent = name;
  

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", deleteCard);

  content.append(cardElement);
}
// @todo: Функция удаления карточки
function deleteCard() {
  const deletListItem = event.target.closest(".card");
  deletListItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  createCard(item.link, item.name);
});
