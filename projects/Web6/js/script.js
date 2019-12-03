// Burger activation
$('.burger-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('burger-btn_active');
});

$('.burger-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu-wrapper').toggleClass('menu-wrapper_active');
    $('.content').toggleClass('content_active');
});

// Display block from 750px of header
let myButton = document.getElementById('top-btn');

window.onscroll = function () {
    if (window.pageYOffset >=750) {
        myButton.style.display = 'block';
    } else {
        myButton.style.display = 'none'
    }
};

// Smooth scrolling
$(document).ready(function () {
    $('#top-btn').click(function () {
        $('html,body').animate({scrollTop: 0}, 1500)
    })
});


// Fixed header on scroll
$(document).ready(function () {
    var navOffset = $(".header-top").offset().top;

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        $(".header-top").toggleClass("fixed", scrollPos > navOffset);
    });
});

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return 0;
        }
    }
});

