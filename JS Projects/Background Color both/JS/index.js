let colors = ['green','yellow','red','pink','orange','blue','black','white','skyblue'];
let btn = document.getElementById('btn');
let body = document.querySelector('body');
let span = document.querySelector('.span');
btn.addEventListener('click',changeBgcolorSimple);
function changeBgcolorSimple(){
    let randomColor =  Math.floor(Math.random()*colors.length);
   // console.log(randomColor)
    body.style.backgroundColor = colors[randomColor];
    span.innerHTML = colors[randomColor];
}