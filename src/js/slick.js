$('.team-slide').slick({
  // dots: true,
  prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  infinite: true, //листаем бесконечно
  speed: 300, //скорость пролистывания
  slidesToScroll: 1, // сколько слайдов за раз
  adaptiveHeight: true,//выровнять высоту слайдов
  slidesToShow: 3, //по сколько слайдов сразу отображ

  responsive: [
    // {
    //   breakpoint: 1200,
    //   settings: {
    //     slidesToShow: 2,
    //   },
    // },
    {
      breakpoint: 768, //читается как max-width
      settings: {
        slidesToShow: 2,
          },
      
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});