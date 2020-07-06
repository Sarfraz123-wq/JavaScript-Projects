let btn1 = document.querySelector('.fa-bars');
let btn2 = document.querySelector('.fa-times');
let mobMenu = document.querySelector('.mob-menu');
// By default
// mobMenu.style.display = 'none';
// btn2.style.display = 'none';
btn2.style.zIndex = '-1';
btn1.addEventListener('click',function(){
    btn2.style.display = 'block';
    btn1.style.display = 'none';
    mobMenu.style.display = 'block';
    btn2.style.zIndex = '1';
})
btn2.addEventListener('click',function(){
    mobMenu.style.display = 'none';
    btn1.style.display = 'block';
    btn2.style.display = 'none';
})