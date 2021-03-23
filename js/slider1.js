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
const indicator = document.querySelectorAll(".indicator li");

let currentNum = 0;

indicator.forEach((clickItem, index) => {
  clickItem.addEventListener("click", () => {
    slideImg.src = images[index];
    indicator[index].classList.add("current");
    if (currentNum === index) {
      return;
    } else {
      indicator[currentNum].classList.remove("current");
    }
    currentNum = index;
  });
});

next.addEventListener("click", () => {
  if (currentNum < images.length - 1) {
    currentNum++;
    slideImg.src = images[currentNum];
    indicator[currentNum - 1].classList.remove("current");
    indicator[currentNum].classList.add("current");
  } else {
    currentNum = 0;
    slideImg.src = images[currentNum];
    indicator[currentNum + images.length - 1].classList.remove("current");
    indicator[currentNum].classList.add("current");
  }
});

prev.addEventListener("click", () => {
  if (currentNum > 0) {
    currentNum--;
    slideImg.src = images[currentNum];
    indicator[currentNum + 1].classList.remove("current");
    indicator[currentNum].classList.add("current");
  } else {
    currentNum = images.length - 1;
    slideImg.src = images[currentNum];
    indicator[0].classList.remove("current");
    indicator[currentNum].classList.add("current");
  }
});

function autoPlay() {
  setTimeout(() => {
    next.click();
    autoPlay();
  }, 3000);
}

window.addEventListener("load", () => {
  autoPlay();
});
