const popups = document.querySelectorAll(".popup");

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

//закрытие попап escape
function closeEsc(e) {
  if (e.key === "Escape") {
    const closedPopup = document.querySelector(".popup_is-opened");
    closePopup(closedPopup);
  }
}

popups.forEach(function (popups) {
  popups.classList.add("popup_is-animated");

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
