'use strict';

console.log('>> Ready :)');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// console.log('> ' + getRandomNumber(100));
var randomNumber = getRandomNumber(100);
console.log(randomNumber);

var button = document.querySelector('.testButton');
var number = document.querySelector('.number');
console.log('<'+insideInput);

function numberInsideInput(event){
 var insideInput = number.value;
 console.log('<'+insideInput);
}

button.addEventListener('click',numberInsideInput);

var insideInput =number.value;

console.log('<'+insideInput);

var clues = document.querySelector('.clues');

function compareNumber(){
  console.log(insideInput);
  if (insideInput===randomNumber){
    clues.innerHTML = 'HAS GANADO, CAMPEONA';
  }else if(insideInput<randomNumber){
    clues.innerHTML = 'Demasiado pequeño';
  }else if(insideInput>randomNumber){
    clues.innerHTML = 'Demasiado alto';
  }
}
compareNumber();
