export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Функция, которая добавляет класс с ошибкой
export function showInputError(formElement, inputElement, errorMessage, validationConfig) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("validationConfig.inputErrorClass");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("validationConfig.errorClass");
};

// Функция, которая удаляет класс с ошибкой
export function hideInputError(formElement, inputElement, validationConfig) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("validationConfig.inputErrorClass");
  errorElement.classList.remove("validationConfig.errorClass");
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля
export function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationMessage);
  } else {
    hideInputError(formElement, inputElement, validationMessage);
  }

  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
};

// слушатель событий добавдяется всем полям ввода внутри формы
export function setEventListeners(formElement, validationConfig) {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, validationConfig);
    });
  });
};

//
export function enableValidation(validationConfig) {
  const formList = Array.from(
    document.querySelectorAll("validationConfig.formSelector")
  );

    formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      setEventListeners(formElement, validationConfig);
    });
    
  });
};