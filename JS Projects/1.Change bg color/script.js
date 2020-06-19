const btn = document.getElementById('clrbtn');
const body = document.querySelector('body');
let colors = ['blue','yellow','green','red','orange'];

btn.addEventListener('click',changeBgColor);

function changeBgColor(){
    // for(let i=2; i<colors.length; i++)
    // {
    //     body.style.backgroundColor = colors[i];
    
    // }
    let random = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[random];
}