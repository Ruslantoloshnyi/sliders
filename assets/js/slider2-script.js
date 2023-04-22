"use strict";

const slider = document.querySelector('.slider2');
const slider_list = document.querySelector('.slider2-list');
const slider_track = document.querySelector('.slider2-track');
const slides = document.querySelectorAll('.slide2');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

const firstSlideClone = slider_track.firstElementChild.cloneNode(true);
slider_track.appendChild(firstSlideClone);

let slideWidth = slider.offsetWidth;
let slideQuantity = slider_track.children.length;
let slideIndex = 1;

slider_track.addEventListener('transitionend', function () {
  if (slideIndex === 0) {
    slider_track.style.transition = 'none';
    slideIndex = slideQuantity - 1;
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  } else if (slideIndex === slideQuantity - 1) {
    slider_track.style.transition = 'none';
    slideIndex = 0;
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
  setActiveDot();
});

function setActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === slideIndex - 1) {
      dot.classList.add('active');
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', function() {
    slideIndex = index + 1;
    setActiveDot();
    slider_track.style.transition = 'transform 0.6s ease-in-out';
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  });
});

btnPrev.addEventListener('click', function () {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slideQuantity - 1;
  } else {
    slider_track.style.transition = 'transform 0.6s ease-in-out';
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
  setActiveDot();
});

btnNext.addEventListener('click', function () {
  slideIndex++;
  if (slideIndex > slideQuantity - 1) {
    slideIndex = 0;
  } else {
    slider_track.style.transition = 'transform 0.6s ease-in-out';
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
  setActiveDot();
});
