let iContainer = document.querySelector('.inner-container');
let dContainer = document.querySelector('.double-inner-container');
let link = document.querySelector('.link');
let closeBtn = document.querySelector('.fa-times');
// dContainer.style.display = 'none';
link.addEventListener('click',function(){
    dContainer.style.display = 'block';
})
closeBtn.addEventListener('click',function(){
    dContainer.style.display = 'none';
})