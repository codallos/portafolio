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
        }else if (ultimoCaracter == '.'){

             
            if(botonGenerico.innerHTML == 'x'){

                pantalla.innerHTML = pantalla.innerHTML + '0' + '*'
               

            }else{

                pantalla.innerHTML = pantalla.innerHTML + '0' + botonGenerico.innerHTML

                
            }




            


        }
        
        else{
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

    var numerPuntos = 0
    
    let resultadoActual = pantalla.innerHTML;
    let ultimoCaracter = pantalla.innerHTML[pantalla.innerHTML.length-1];
    let cadenaInterna = resultadoActual+'.'; // el ultimo caracter de la cadena interna siempre va a ser el .
    let ultimoCaracterCadenaInterna = '.'
    //let numerPuntos = cadenaInterna.split('.').length-1;
    let cuentaMas = cadenaInterna.split('+')
    cuentaMas = cuentaMas[cadenaInterna.split('+').length-1]

    let lugarDeMas = resultadoActual.lastIndexOf('+')
    let lugarDeMenos = resultadoActual.lastIndexOf('-')
    let lugarDePor = resultadoActual.lastIndexOf('*')
    let lugarDeEntre = resultadoActual.lastIndexOf('/')

    function mayorTodos (lugarDeMas,lugarDeMenos,lugarDePor,lugarDeEntre){

        console.log('Mas: ', lugarDeMas)
        console.log('Menos: ', lugarDeMenos)
        console.log('Por: ', lugarDePor)
        console.log('Entre: ', lugarDeEntre)


        let seleccionCorte = Math.max(lugarDeMas,lugarDeMenos,lugarDePor,lugarDeEntre)
        let caracterDeCorte = resultadoActual[seleccionCorte]
        console.log(caracterDeCorte)

        if (caracterDeCorte == undefined){
            numerPuntos=resultadoActual.split('.').length-1
            console.log('funcion',numerPuntos)
            return resultadoActual+'.'
            
        } else{

            let corteCadena = cadenaInterna.split(caracterDeCorte)
            let ultimaExpresionOk = corteCadena[corteCadena.length-1]
            console.log('funcion else',numerPuntos)
            numerPuntos = ultimaExpresionOk.split('.').length-2;
    
            return ultimaExpresionOk

        }



    }

   




    console.log('---') 
    let miCorte = mayorTodos(lugarDeMas,lugarDeMenos,lugarDePor,lugarDeEntre)

    console.log('El resultado actual es',resultadoActual);
    console.log('El ultimo caracter real:',ultimoCaracter);
    console.log('la cadena interna es', cadenaInterna);
    //console.log('Numero de puntos', numerPuntos);
    console.log('ultima expresion ingresada', cuentaMas);
    console.log('ultima expresion ingresada2', miCorte);

    let converFlotante = parseFloat(cuentaMas);
    let converFlotanteDos = parseFloat(miCorte)

    console.log('Conversion 1',converFlotante)
    console.log(Number.isInteger(converFlotante))

    console.log('Conversion 2',converFlotanteDos)
    console.log(Number.isInteger(converFlotanteDos))



    if (resultadoActual == 0 || resultadoActual == '' ){

        pantalla.innerHTML='0.'
        console.log('estas en el if') 

    }else if (ultimoCaracter == '.' && ultimoCaracterCadenaInterna == '.' ){

        pantalla.innerHTML=resultadoActual
        console.log('estas en el primer else if')

    }else if ((ultimoCaracter == '+'|| ultimoCaracter == '-'|| ultimoCaracter == '*'|| ultimoCaracter == '/') && ultimoCaracterCadenaInterna == '.'){

        pantalla.innerHTML=resultadoActual+'0.'
        console.log('estas en el segundo else if')

    }else if (Number.isInteger(converFlotanteDos) && converFlotanteDos > 0 && numerPuntos == 0){ // evita que en el primer ingreso se colocquen 2 puntos

        pantalla.innerHTML=cadenaInterna
        console.log('estas en el tercer else if');
        let ahoraString = converFlotanteDos.toString()
        console.log(ahoraString);

    }else if (converFlotanteDos <= 0){

        //let ahoraString = converFlotante.toString();
        let ahoraString2 = converFlotanteDos.toString()


        //ahoraString=ahoraString+'.';
        ahoraString2=ahoraString2+'.'

        console.log('estas en las pruebas');

        //let nuevoInput = resultadoActual.split('+')


        let seleccionCorte = Math.max(lugarDeMas,lugarDeMenos,lugarDePor,lugarDeEntre)
        let caracterDeCorte = resultadoActual[seleccionCorte]
        let nuevoInput2 = resultadoActual.split(caracterDeCorte)
        nuevoInput2.pop();
        nuevoInput2.push(ahoraString2)
        let textoFinal2 = nuevoInput2.join(caracterDeCorte)


        //let ultimaExpresionOk = corteCadena[corteCadena.length-1]

         
        //nuevoInput.pop();
        //nuevoInput.push(ahoraString)
        //let textoFinal = nuevoInput.join('+')
        console.log(textoFinal2)
        pantalla.innerHTML = textoFinal2


    }
    
    else{
        console.log('estas en el else')
        
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
        let operacion = (eval(resultadoActual))/100
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



