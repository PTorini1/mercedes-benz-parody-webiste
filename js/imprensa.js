function typeImprensa(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 300 * i)
});
}

function typeManchete(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 170 * i)
});
}

function typeParagrafo(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 10 * i)
});
}

var titulo = document.querySelector('.display-4');
var m1 = document.getElementById('m1')
var m2 = document.getElementById('m2')
var m3 = document.getElementById('m3')

typeImprensa(titulo);

typeManchete(m1)
typeManchete(m2)
typeManchete(m3)

typeParagrafo(p1)
typeParagrafo(p2)
typeParagrafo(p3)


