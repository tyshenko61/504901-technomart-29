const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".map-popup");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  mapClose.focus();
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

/* модальное окно напишите нам */
const writeUsLink = document.querySelector(".button-write-us");
const feedbackForm = document.querySelector(".feedback-form");
const feedbackClose = feedbackForm.querySelector(".modal-close");
const feedbackFormName = feedbackForm.querySelector("[name=name]");

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("modal-show");
  feedbackFormName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
    if (feedbackForm.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackForm.classList.remove("modal-show");
    }
  }
});

