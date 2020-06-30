let hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// Access Elements
let btn = document.getElementById('btn');
let body = document.querySelector('body');
let span = document.querySelector('.span');

btn.addEventListener('click',changeHexBgColor);

  
function changeHexBgColor(){
    let randomNumber = '#';
    for(let i =0; i<6; i++){
        let num = Math.floor(Math.random()*hexColors.length);
        randomNumber+=hexColors[num];
        
    }
    //console.log(randomNumber)
    document.body.style.backgroundColor = randomNumber;
    span.innerHTML = randomNumber;
}  
