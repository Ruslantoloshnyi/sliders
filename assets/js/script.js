"use strict"

const slider = document.querySelector('.slider');
const slider_list = document.querySelector('.slider-list');
const slider_track = document.querySelector('.slider-track');
const slide = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let slideWidth = slider.offsetWidth;
let slideQuantity = slide.length;
let slideIndex = 0;

btnPrev.addEventListener('click', function () {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slideQuantity - 1;
    slider_track.style.transition = 'transform 0.1s ease-in-out';
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  } else {
    slider_track.style.transition = 'transform 0.6s ease-in-out';
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }

});

btnNext.addEventListener('click', function () {
  slideIndex++;
  if (slideIndex > slideQuantity - 1) {
    slideIndex = 0;
    slider_track.style.transition = 'transform 0.1s ease-in-out';
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  } else {
    slider_track.style.transition = 'transform 0.6s ease-in-out';
    slider_track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }

});