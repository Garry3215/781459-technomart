var mapLink = document.querySelector(".small-map");
var mapPopup = document.querySelector(".big-map-modal");
var mapClose = document.querySelector(".big-map-modal .close-modal");

var writeLink = document.querySelector(".write-us-button");
var writePopup = document.querySelector(".write-us-modal");
var writeClose = document.querySelector(".write-us-modal .close-modal");

var cartLink = document.querySelector(".buy-button");
var cartPopup = document.querySelector(".modal-good-in-cart");
var cartClose = document.querySelector(".modal-good-in-cart .close-modal");

var leftSlider = document.querySelector(".left-slider-button");
var rightSlider = document.querySelector(".right-slider-button");
var slider1 = document.querySelector(".slider-1");


leftSlider && leftSlider.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (slider && slider.classList.contains("bottom-slider")) {
    slider.classList.remove("bottom-slider");
  } else {
    slider.classList.add("bottom-slider");
  }
})


cartLink && cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (cartPopup) {
      cartPopup.classList.add("modal-open");
    }
  });

cartClose && cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (cartPopup) {
    cartPopup.classList.remove("modal-open");
  }
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (cartPopup && cartPopup.classList.contains("modal-open")) {
      cartPopup.classList.remove("modal-open");
    }
  }
});



writeLink && writeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (writePopup) {
      writePopup.classList.add("modal-open");
    }
  });

writeClose && writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (writePopup) {
      writePopup.classList.remove("modal-open");
    }
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (writePopup && writePopup.classList.contains("modal-open")) {
        writePopup.classList.remove("modal-open");
      }
    }
  });




mapLink && mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (mapPopup) {
      mapPopup.classList.add("modal-open");
    }
  });

mapClose && mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (mapPopup) {
      mapPopup.classList.remove("modal-open");
    }
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup && mapPopup.classList.contains("modal-open")) {
        mapPopup.classList.remove("modal-open");
      }
    }
  });
