var presentacion = document.getElementById('presentacion');
var alarcon = document.getElementById('alarcon');
var belmonte = document.getElementById('belmonte');
var sisante = document.getElementById('sisante');
var sanClemente = document.getElementById('sanClemente');
var huete = document.getElementById('huete');
var contraportada = document.getElementById('contraportada');

//sonido
var efecto = new Audio("iphone-tipear-2.mp3");


presentacion.style.display = 'block';
presentacion.style.animation = 'arribanormal 5s';

alarcon.style.display = 'none';
alarcon.style.animation = 'izquierdanormal 5s';

belmonte.style.display = 'none';
belmonte.style.animation = 'opacidad 5s';

sisante.style.display = 'none';
sisante.style.animation = 'arribanormal 5s';

sanClemente.style.display = 'none';
sanClemente.style.animation = 'izquierdanormal 5s';

huete.style.display = 'none';
huete.style.animation = 'opacidad 5s';

contraportada.style.display = 'none';
contraportada.style.animation = 'arribanormal 5s';


//lanzamos un evento1
presentacion.addEventListener('click', cambiarEscena_1_2)
alarcon.addEventListener('click', cambiarEscena_2_3)
belmonte.addEventListener('click', cambiarEscena_3_4)
sisante.addEventListener('click', cambiarEscena_4_5)
sanClemente.addEventListener('click', cambiarEscena_5_6)
huete.addEventListener('click', cambiarEscena_6_7)
contraportada.addEventListener('click', cambiarEscena_7_1)

//funciones
function cambiarEscena_1_2() {
    presentacion.style.display = 'none';
    alarcon.style.display = 'block';
    alarcon.style.animation = 'arribanormal 5s';
    alarcon.firstElementChild.style.animation = 'arribanormal 5s'
    efecto.play();
}
//lanzamos evento2 a que la segunda foto se camie por tercera y asi en cada una 


//funciones
function cambiarEscena_2_3() {
    alarcon.style.display = 'none';
    belmonte.style.display = 'block';
    belmonte.style.animation = 'opacidad 5s';
    belmonte.firstElementChild.style.animation = 'opacidad 5s';
    efecto.play();
}


//funciones
function cambiarEscena_3_4() {
    belmonte.style.display = 'none';
    sisante.style.display = 'block';
    sisante.style.animation = 'arribanormal 5s';
    sisante.firstElementChild.style.animation = 'arribanormal 5s';
    efecto.play();
}


//funciones
function cambiarEscena_4_5() {
    sisante.style.display = 'none';
    sanClemente.style.display = 'block';
    sanClemente.style.animation = 'izquierdanormal 5s';
    sanClemente.firstElementChild.style.animation = 'izquierdanormal 5s';
    efecto.play();
}

function cambiarEscena_5_6() {
    sanClemente.style.display = 'none';
    huete.style.display = 'block';
    huete.style.animation = 'opacidad 5s';
    huete.firstElementChild.style.animation = 'opacidad 5s';
    efecto.play();
}



//funciones
function cambiarEscena_6_7() {
    huete.style.display = 'none';
    contraportada.style.display = 'block';
    contraportada.style.animation = 'skew-normal 5s';
    contraportada.firstElementChild.style.animation = 'skew-normal 5s'
    efecto.play();
}

function cambiarEscena_7_1() {
    contraportada.style.display = 'none';
    presentacion.style.display = 'block';
    presentacion.style.animation = 'arribanormal 5s';
    presentacion.firstElementChild.style.animation = 'arribanormal 5s'
    efecto.play();
}

