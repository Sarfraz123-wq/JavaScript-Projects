let h1 = document.createElement('h1');
h1.innerHTML = '<h3> Click either on Circle or Square btn to see their shape </h3>';
h1.id = 'heading';
let body = document.querySelector('body');
body.insertAdjacentElement('afterbegin',h1)

let circleBtn = document.createElement('button');
circleBtn.id = 'circle';


let squareBtn = document.createElement('button');
squareBtn.id = 'square';

// Access
let circleDiv = document.getElementById('circleDiv');
circleDiv.appendChild(circleBtn);
let squareDiv = document.getElementById('squareDiv');
squareDiv.appendChild(squareBtn);
let circle = document.getElementById('circle');
circle.style.width = '130px';
circle.style.height = '30px';
circle.innerHTML = 'Show Circle'
circle.style.fontSize = "16px";
let square = document.getElementById('square');
square.style.width = '130px';
square.style.height = '30px';
square.innerHTML = 'Show Square'
square.style.fontSize = "16px";
let heading = document.getElementById('heading'); 


let buttons = document.querySelector('.buttons');
window.addEventListener('DOMContentLoaded',function(){
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    buttons.style.display = 'flex';
    square.style.marginLeft = '10px';
})
heading.style.marginTop = '-20px';



circle.addEventListener('click',showCircleShape);
square.addEventListener('click',showSquareShape);

function showCircleShape(){
    
    circleDiv.style.width = '300px';
    circleDiv.style.height = '300px';
    circleDiv.style.backgroundColor = 'grey';
    circleDiv.style.borderRadius = '50%';
    square.style.display = 'none';
    circle.style.display = 'none'
}
function showSquareShape(){
    
    circleDiv.style.width = '300px';
    circleDiv.style.height = '300px';
    circleDiv.style.backgroundColor = 'grey';
    square.style.display = 'none';
    circle.style.display = 'none'
}