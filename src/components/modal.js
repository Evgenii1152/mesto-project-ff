// открытие попап
export function openPopup(targetPopup) {
  targetPopup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeEsc);
}
//закрытие попап
export function closePopup(targetPopup) {
  targetPopup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeEsc);
}

//закрытие попап escape
function closeEsc(e) {
  if (e.key === "Escape") {
    const closedPopup = document.querySelector(".popup_is-opened");
    closePopup(closedPopup);
  }
}


