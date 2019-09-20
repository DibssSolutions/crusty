import slick from 'slick-carousel';
const slider = $('.js-slider');

slider.slick({
  dots: false,
  arrows: true,
  // infinite: false,
  speed: 600,
  slidesToShow: 1,
  slideToScroll: 1,
  autoplay: false,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<button class="slider__arrow slider__arrow_prev"><svg width="16" height="28" viewBox="0 0 16 28" xmlns="http://www.w3.org/2000/svg"><title>arrow</title><path d="M1 1l13 13L1 27" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></button>',
  nextArrow: '<button class="slider__arrow slider__arrow_next"><svg width="16" height="28" viewBox="0 0 16 28" xmlns="http://www.w3.org/2000/svg"><title>arrow</title><path d="M1 1l13 13L1 27" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></button>'
});
