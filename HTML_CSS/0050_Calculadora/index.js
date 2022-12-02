const bodytema = document.getElementById('principal');
const cambio = document.getElementById('os');
const pantalla = document.querySelector('.pantalla');

/* Selecion de teclas */

const botonReinicio = document.getElementById('reinicia');
const botonBorra = document.getElementById('borra');
const botonPorcentaje = document.getElementById('porcentaje');
const botonDivision = document.getElementById('entre');

const botonSiete = document.getElementById('siete');
const botonOcho = document.getElementById('ocho');
const botonNueve = document.getElementById('nueve');
const botonMultiplicacion = document.getElementById('por');

const botonCuatro = document.getElementById('cuatro');
const botonCinco = document.getElementById('cinco');
const botonSeis = document.getElementById('seis');
const botonResta = document.getElementById('menos');

const botonUno = document.getElementById('uno');
const botonDos = document.getElementById('dos');
const botonTres = document.getElementById('tres');
const botonSuma = document.getElementById('mas');


const botonCero = document.getElementById('cero');
const botonPunto = document.getElementById('punto');
const botonIgual = document.getElementById('igual');

/* Limpiar pantalla */
botonReinicio.addEventListener('click',()=>pantalla.innerHTML="");

/* Borrar ultima letra ingresada */
botonBorra.addEventListener('click',()=>{
    let resultadoActual = pantalla.innerHTML;
    pantalla.innerHTML = resultadoActual.substring(0,resultadoActual.length-1)
    
    
});

/* Agregar texto a la pantalla de inicio botones operaciones principales*/

function teclasEspeciales(botonGenerico){

    botonGenerico.addEventListener('click', () => {

        let resultadoActual = pantalla.innerHTML;
        if(resultadoActual[resultadoActual.length-1] !== botonGenerico.innerHTML){  
            pantalla.innerHTML = pantalla.innerHTML + botonGenerico.innerHTML;
        }else{
            console.log('repetido');
        }
    });
    

}

/*
botonPorcentaje.addEventListener('click', () => {

    let resultadoActual = pantalla.innerHTML;
    if(resultadoActual[resultadoActual.length-1] !== botonPorcentaje.innerHTML){  
        console.log(botonPorcentaje.innerHTML, resultadoActual);
        pantalla.innerHTML = pantalla.innerHTML + botonPorcentaje.innerHTML;
    }else{
        console.log('repetido');
    }
});*/

teclasEspeciales(botonPorcentaje);
teclasEspeciales(botonDivision);
teclasEspeciales(botonMultiplicacion);
teclasEspeciales(botonResta);
teclasEspeciales(botonSuma);
teclasEspeciales(botonPunto);

/* teclado numerico*/

function teclasNumericas(botonGenerico){

    botonGenerico.addEventListener('click', () => {
        pantalla.innerHTML = pantalla.innerHTML + botonGenerico.innerHTML;

    });
    

}

teclasNumericas(botonCero);
teclasNumericas(botonUno);
teclasNumericas(botonDos);
teclasNumericas(botonTres);
teclasNumericas(botonCuatro);
teclasNumericas(botonCinco);
teclasNumericas(botonSeis);
teclasNumericas(botonSiete);
teclasNumericas(botonOcho);
teclasNumericas(botonNueve);


/*Cambio de tema*/
cambio.addEventListener('click', ()=>bodytema.classList.toggle('light'));







/* Pruebas */



/*

const teclas = document.querySelectorAll('span');
console.log(teclas[2].innerHTML);

teclas[0].addEventListener('click', ()=>console.log('po'));



teclas.forEach((tecla)=>{

    tecla.addEventListener('click',()=>{

        if(tecla.id == 'reinicia'){

            console.log('reinicio')

        }

    })



});

*/



