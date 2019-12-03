$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return 0;
        }
    }
});




let myButton = document.getElementById('scroll-btn');

window.onscroll = function () {
    if (window.pageYOffset >=910) {
        myButton.style.display = 'block';
    } else {
        myButton.style.display = 'none'
    }
}


$(document).ready(function () {
    var navOffset = $(".top-menu").offset().top;

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        $(".top-menu").toggleClass("fixed", scrollPos > navOffset);
    });
});

//
// $('.dd').hide();
// $('.block-info h3').click(function() {
//     $(this).next('.dd').slideToggle();
// });

// if (scrollPos > navOffset) {
// var b = document.getElementById("intro");

