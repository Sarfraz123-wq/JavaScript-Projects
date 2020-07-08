let bars = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-close');
let mobileNavbar = document.getElementById('mobile-navbar');
bars.style.cursor = 'pointer';
close.style.cursor = 'pointer';
close.style.display = 'none';

bars.addEventListener('click',function(){
    mobileNavbar.style.display = 'block';
    bars.style.display = 'none';
    close.style.display = 'block';
})
close.addEventListener('click',function(){
    mobileNavbar.style.display = 'none';
    bars.style.display = 'block';
    close.style.display = 'none';
})

let dynamicNavbar = document.getElementById('dynamic-navbar');
let staticNavbar = document.getElementById('static-navbar');
    document.body.addEventListener('wheel',function(){
    let query = window.matchMedia("(min-width:800px)");
    if(query.matches){
    staticNavbar.style.display = 'none';
    dynamicNavbar.style.display = 'block';
    }
})
