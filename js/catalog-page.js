/* модальное окно каталога */
const buttonBuy = document.querySelectorAll(".button-buy");
const carPopup = document.querySelector(".car-popup");
const carPopupClose = carPopup.querySelector(".modal-close");
const buttonOrder = carPopup.querySelector(".button-order")

for (let i = 0; i < buttonBuy.length; i++) {
  buttonBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    carPopup.classList.add("modal-show");
    buttonOrder.focus();
  });
}
;

carPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  carPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (carPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      carPopup.classList.remove("modal-show");
    }
  }
});
