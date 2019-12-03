$('.header-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
});

$('.secondary-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1
});

$('.third-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1035,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.comments').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
});

$('.brands-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
});

$('.news-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});

$(document).ready(function () {
   $('.links-top, .to-top').click(function () {
     $('html,body').animate({scrollTop: 0}, 1500)
   })
});

$('.burger-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('burger-btn_active');
});

$('.burger-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu-wrapper').toggleClass('menu-wrapper_active');
    $('.logo').toggleClass('content_active');
});