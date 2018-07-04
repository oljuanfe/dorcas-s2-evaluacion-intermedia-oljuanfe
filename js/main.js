'use strict';

console.log('>> Ready :)');

//Apuntar hacia el boton, el input, las pistas y los intentos

var button = document.querySelector('.testButton');
var number = document.querySelector('.number');
var clues = document.querySelector('.clues');
var tries = document.querySelector('.tries');

//Variable contador a 0

var counter = 0;


//Funcion para obtener numero aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Obtener numero aleatorio y guardarlo en variable

var randomNumber = getRandomNumber(100);
console.log(randomNumber);

//Funcion para comparar numero aleatorio con numero input
//pongo recogida de input dentro funcion para que compare numero nuevo cada vez que se ejecute

function compareNumber(){
  var insideInputAsAString = number.value;
  var insideInput = parseInt(insideInputAsAString);
  if (insideInput===randomNumber){
    clues.innerHTML = 'HAS GANADO, CAMPEONA';
    console.log('HAS GANADO, CAMPEONA');
  }else if(insideInput<randomNumber){
    clues.innerHTML = 'Demasiado pequeño';
    console.log('Demasiado pequeño');
  }else if(insideInput>randomNumber){
    clues.innerHTML = 'Demasiado alto';
    console.log('Demasiado alto');
  }
}

//Contador de intentos

function counterTries (){
  counter = counter + 1;
  console.log(counter);
  tries.innerHTML = counter;
}

//Funcion principal juego que contiene las otras funciones

function game(event){
  compareNumber();
  counterTries();
}

//Evento click cuando clickamos boton

button.addEventListener('click',game);


//Fin
