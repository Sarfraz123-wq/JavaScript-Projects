const btn = document.getElementById('btn');
const span = document.getElementById('span');
const body = document.querySelector('body');
let colorNumbers = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',changeBgColor);
function changeBgColor(){
    let bgColor = '#';
    for(let i=0;i<6;i++)
    {
        let random = Math.floor(Math.random()*colorNumbers.length);
        bgColor+=colorNumbers[random];
    }
    body.style.backgroundColor = bgColor;
    span.innerHTML = bgColor;

}