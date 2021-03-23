"use strict";

const slideImg = document.getElementById("slide-img");
const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
];
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentNum = 0;

next.addEventListener("click", () => {
  if (currentNum < images.length - 1) {
    ++currentNum;
    slideImg.src = images[currentNum];
  } else {
    currentNum = 0;
    slideImg.src = images[currentNum];
  }
});

prev.addEventListener("click", () => {
  if (currentNum > 0) {
    currentNum--;
    slideImg.src = images[currentNum];
  } else {
    currentNum = images.length - 1;
    slideImg.src = images[currentNum];
  }
});
