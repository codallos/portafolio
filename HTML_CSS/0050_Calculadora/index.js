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
        let ultimoCaracter = resultadoActual[resultadoActual.length-1];

        if(ultimoCaracter !== '%' && ultimoCaracter !== '/' && ultimoCaracter !== 'x' && ultimoCaracter !== '-' &&  ultimoCaracter !== '+'  &&  ultimoCaracter !== '.' ){  
            
            if(botonGenerico.innerHTML == 'x'){

                pantalla.innerHTML = pantalla.innerHTML + '*';
               

            }else{

                pantalla.innerHTML = pantalla.innerHTML + botonGenerico.innerHTML;
                console.log(ultimoCaracter);
               

            }

        
        // }else if(botonGenerico.innerHTML === '.' && ultimoCaracter !== '.'){
        //     console.log(ultimoCaracter);
        //     console.log(botonGenerico);
        //     pantalla.innerHTML = pantalla.innerHTML + botonGenerico.innerHTML;
        //     console.log('estas en el else if');
           

        // }
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

//teclasEspeciales(botonPorcentaje);

teclasEspeciales(botonDivision);
teclasEspeciales(botonMultiplicacion);
teclasEspeciales(botonResta);
teclasEspeciales(botonSuma);


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



/* Tecla punto */

botonPunto.addEventListener('click', ()=>{
    
    let resultadoActual = pantalla.innerHTML;
    let ultimoCaracter = pantalla.innerHTML[pantalla.innerHTML.length-1];
    let cadenaInterna = resultadoActual+'.'; // el ultimo caracter de la cadena interna siempre va a ser el .
    let numerPuntos = cadenaInterna.split('.').length-1;
    let cuentaMas = cadenaInterna.split('+').length-1

    console.log('')
    console.log('El resultado actual es',resultadoActual);
    console.log('El ultimo caracter real:',ultimoCaracter);
    console.log('la cadena interna es', cadenaInterna);
    console.log('Numero de puntos', numerPuntos);
    console.log('Numero de +', cuentaMas)


    if (ultimoCaracter !== '.'){

      
        pantalla.innerHTML+='.'

       

    }

});

/* boton porcentale*/

botonPorcentaje.addEventListener('click',()=>{

    let resultadoActual = pantalla.innerHTML
    console.log('click');
    if (resultadoActual == '' ){

        pantalla.innerHTML = 0

    }else if (resultadoActual == 0){
        pantalla.innerHTML = 0

    }else{
        let operacion = eval(resultadoActual)/100
        pantalla.innerHTML = operacion

    }
    

})

/* boton igual*/

botonIgual.addEventListener('click',()=>{

    let resultadoActual = pantalla.innerHTML
    console.log('click');
    if (resultadoActual == ''){

        pantalla.innerHTML = 0

    }else{
        let operacion = eval(resultadoActual)
        pantalla.innerHTML = operacion

    }
    
});


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



