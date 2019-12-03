var mode = document.getElementById("night-mode");
var checkBox = document.getElementById("night_btn");

nighCheck();

function nighCheck() {
    if (localStorage.getItem('nnn') === 'true') {
        mode.className = "marked nightmode";
        checkBox.checked = true;
    }
}

function nightMode() {
    if (checkBox.checked === true) {
        mode.className = "marked nightmode";
        localStorage.setItem('nnn', 'true')
    } else if (checkBox.checked === false) {
        mode.className = "marked";
        localStorage.removeItem('nnn')
    }
}

// Hamburger Menu
var burger = document.getElementById('burger');
burger.addEventListener('click', doBurger);


function doBurger() {
    let x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className = "topnav responsive";
    } else {
        x.className = "topnav";
    }
}
// End of Hamburger Menu

$(function() {
    $('.sl').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});