var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    slidesPerView: 1,
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    centeredSlides: true,
    // loop: true,
    autoplay: {
      delay: 2500,
      // disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
  