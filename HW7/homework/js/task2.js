/** @format */

let inputWord = "023456778";
let str = inputWord.length;
let y = inputWord[str - 2] +inputWord[str - 3];
console.log(y);
/*
`use strict`;
let inputWord = prompt(`Input a word`);
let two = 2;
let half = inputWord / two;

let str = inputWord.length;

if (inputWord === null) {
  alert(`Invalid value`);
} else if (inputWord.length % two === 0) {
  let y = inputWord[str / two - 1] + inputWord[str / two];
  alert(y);
} else {
  let x = inputWord[(str - 1) / two];
  alert(x);
}
*/