$(document).ready(function () {
  $('.big-card-sl-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 800,
    asNavFor: '.big-card-sl-nav'
  });
  $('.big-card-sl-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.big-card-sl-top',
    dots: false,
    focusOnSelect: true,
    speed: 800
  });
});