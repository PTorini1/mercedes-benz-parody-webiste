function mostraMenu(){
    nav.classList.remove("setNone");
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
}

function removeVideoInicial(){
    var logoFixo = document.getElementById("logoPrincipalImagem");
    var videoInicial = document.getElementById("logoPrincipalVideo");
    videoInicial.classList.add("setDisplayNone");
    videoInicial.outerHTML=""
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

var som = document.getElementById("formulaAudio");
var videof1 = document.getElementById("videoFormula1");
function somFormula1(){
    som.play();
    videof1.play();
}

function removeSom(){
    som.pause();
    videof1.pause();
}