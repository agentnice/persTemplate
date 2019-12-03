$('.burger-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('burger-btn_active');
});

$('.burger-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu-wrapper').toggleClass('menu-wrapper_active');
    $('.content').toggleClass('content_active');
});

$('.small-slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 4000
});

$('.big-slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 4000
});

// $('.slider-container').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });
