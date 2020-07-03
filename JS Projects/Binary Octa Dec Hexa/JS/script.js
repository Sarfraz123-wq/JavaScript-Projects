let input = Number(prompt("give input number for number conversion"));
let inpNumber = document.getElementById('inpNumber');
let result = document.getElementById('result');
let binary = document.getElementById('binary');
let octa = document.getElementById('octa');
let decimal = document.getElementById('decimal');
let hexa = document.getElementById('hexa');

inpNumber.value = input;

binary.addEventListener('click',BinaryConversion);
function BinaryConversion(){
    
    let answer = input.toString(2);
    result.value = answer;
   
}

octa.addEventListener('click',octaConversion);
function octaConversion(){
    let answer = input.toString(8);
    result.value = answer;
}
decimal.addEventListener('click',decimalConversion);
function decimalConversion(){
    let answer = input.toString(10);
    result.value = answer;
}
hexa.addEventListener('click',hexaConversion);
function hexaConversion(){
    let answer = input.toString(16);
    result.value = answer;
}