var barmobie = document.querySelector(".bar-mob");
var menu = document.querySelector(".menu-bottom");
var blackbg = document.querySelector(".black-bg");
var close = document.querySelector(".close");
var body = document.querySelector("body");

barmobie.onclick = () => {
  menu.classList.add("active");
  blackbg.classList.add("active");
  close.classList.add("active");
  body.classList.add("no-scroll");
};
blackbg.onclick = () => {
  menu.classList.remove("active");
  blackbg.classList.remove("active");
  close.classList.remove("active");
  body.classList.remove("no-scroll");
};
close.onclick = () => {
  menu.classList.remove("active");
  blackbg.classList.remove("active");
  close.classList.remove("active");
  body.classList.remove("no-scroll");
};
window.onscroll = () => {
  if (window.pageYOffset > 40) {
    menu.classList.add("hide");
  } else {
    menu.classList.remove("hide");
  }
};
slides = () => {
  $(".slide-product").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  });
};



