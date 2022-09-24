(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 50);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

// Menu Disapearing When Scroll Down
{
    var nav = document.getElementById("menu");
    var menu = document.getElementById("menuFixo")
    let lastScrollY = window.scrollY;
      
    window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("setNone");
    } else {
        nav.classList.remove("setNone");
    }
        lastScrollY = window.scrollY;
    });  
}

function mostraMenu(){
    nav.classList.remove("setNone");
}

function removeMenu(){
    nav.classList.add("setNone");
}

// Tira som do vídeo
var video = document.getElementById("videoGalinha");

function mouseOver(){
    video.play();
}

function onmouseOut(){
    video.pause();
}

// Carrega Vídeo Inicial (Logo)
{
    var logoFixo = document.getElementById("logoPrincipalImagem");
    logoFixo.classList.add("setDisplayNone");  
    var videoInicial = document.getElementById("logoPrincipalVideo");
    videoInicial.play(); 
}

function removeVideoInicial(){
    var logoFixo = document.getElementById("logoPrincipalImagem");
    var videoInicial = document.getElementById("logoPrincipalVideo");
    videoInicial.classList.add("setDisplayNone");
    logoFixo.classList.remove("setDisplayNone");

    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 50);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
}
