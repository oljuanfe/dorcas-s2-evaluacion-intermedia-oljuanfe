'use strict';

console.log('>> Ready :)');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// console.log('> ' + getRandomNumber(100));
//Obtener numero aleatorio y guardarlo en variable

var randomNumber = getRandomNumber(100);
console.log(randomNumber);

//Apuntar hacia el boton y el input

var button = document.querySelector('.testButton');
var number = document.querySelector('.number');
var clues = document.querySelector('.clues');

// var insideInputAsAString = number.value;
//  var insideInput = parseInt(insideInputAsAString);
//  console.log('1<<<'+insideInput);

//Funcion para comparar numero aleatorio con numero input
//pongo recogida de input dentro funcion para que compare nuevo numero nuevo cada vez que se ejecute

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
  console.log('funcion comparar');
}

//Funcion para guardar el valor introducido en input

function numberInsideInput(event){
 // var insideInputAsAString = number.value;
 //  var insideInput = parseInt(insideInputAsAString);
  // console.log('1<<<'+insideInput);
  compareNumber();
}

//Evento click cuando metemos valor input

button.addEventListener('click',numberInsideInput);

// var insideInput =number.value;
//
// console.log('3<'+insideInput);


//
// button.addEventListener('click',compareNumber);
