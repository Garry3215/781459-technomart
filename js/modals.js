var mapLink = document.querySelector(".small-map");
var mapPopup = document.querySelector(".big-map-modal");
var mapClose = document.querySelector(".big-map-modal .close-modal");

var writeLink = document.querySelector(".write-us-button");
var writePopup = document.querySelector(".write-us-modal");
var writeClose = document.querySelector(".write-us-modal .close-modal");

var catalogItem = document.querySelector(".catalog-item");
var cartLink = catalogItem.querySelector(".buy-button");
var cartPopup = document.querySelector(".modal-good-in-cart");
var cartClose = document.querySelector(".modal-good-in-cart .close-modal");

var divSlider1 = document.querySelector(".slider-1");
var leftSliderButton1 = divSlider1.querySelector(".left-slider-button");
var rightSliderButton1 = divSlider1.querySelector(".right-slider-button");
var divSlider2 = document.querySelector(".slider-2");
var leftSliderButton2 = divSlider2.querySelector(".left-slider-button");
var rightSliderButton2 = divSlider2.querySelector(".right-slider-button");
var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
var serviceButton1 = document.querySelector(".services-button-delivery");
var serviceButton2 = document.querySelector(".services-button-garanty");
var serviceButton3 = document.querySelector(".services-button-credit");
var service1 = document.querySelector(".services-delivery");
var service2 = document.querySelector(".services-garanty");
var service3 = document.querySelector(".services-credit");


serviceButton1 && serviceButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (serviceButton1.classList.contains("services-button-choosen")) {

  } else {
    serviceButton1.classList.add("services-button-choosen");
    serviceButton2.classList.remove("services-button-choosen");
    serviceButton3.classList.remove("services-button-choosen");
    service1.classList.remove("services-ul-display");
    service2.classList.add("services-ul-display");
    service3.classList.add("services-ul-display");
  }
})

serviceButton2 && serviceButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (serviceButton2.classList.contains("services-button-choosen")) {

  } else {
    serviceButton2.classList.add("services-button-choosen");
    serviceButton1.classList.remove("services-button-choosen");
    serviceButton3.classList.remove("services-button-choosen");
    service2.classList.remove("services-ul-display");
    service1.classList.add("services-ul-display");
    service3.classList.add("services-ul-display");
  }
})

serviceButton3 && serviceButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (serviceButton3.classList.contains("services-button-choosen")) {

  } else {
    serviceButton3.classList.add("services-button-choosen");
    serviceButton2.classList.remove("services-button-choosen");
    serviceButton1.classList.remove("services-button-choosen");
    service3.classList.remove("services-ul-display");
    service2.classList.add("services-ul-display");
    service1.classList.add("services-ul-display");
  }
})



leftSliderButton1 && leftSliderButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (slider1 && slider2) {
    slider1.classList.toggle("bottom-slider");
    slider2.classList.toggle("bottom-slider");
  }
})

leftSliderButton2 && leftSliderButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (slider1 && slider2) {
    slider1.classList.toggle("bottom-slider");
    slider2.classList.toggle("bottom-slider");
  }
})

rightSliderButton1 && rightSliderButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider1.classList.toggle("bottom-slider");
  slider2.classList.toggle("bottom-slider");
})

rightSliderButton2 && rightSliderButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider1.classList.toggle("bottom-slider");
  slider2.classList.toggle("bottom-slider");
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
