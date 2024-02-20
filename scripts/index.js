// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const content = document.querySelector(".places__list");

// @todo: Функция создания карточки
initialCards.forEach(function (item) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__title").textContent = item.name;
  cardElement.querySelector(".card__image").alt = item.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", deleteCard);

  content.append(cardElement);
});
// @todo: Функция удаления карточки
function deleteCard() {
  const deletListItem = event.target.closest(".card");
  deletListItem.remove();
}

// @todo: Вывести карточки на страницу
