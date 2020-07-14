const video = document.querySelector('.video');
const pause = document.querySelector('.pause');
const resume = document.querySelector('.resume');

pause.addEventListener('click',function(){
    video.pause();
})
resume.addEventListener('click',function(){
    video.play();
})
const preLoader = document.querySelector('.preLoader');
window.addEventListener('load',function(){
        preLoader.style.visibility = 'hidden'
    // preLoader.classList.add('hidePreLoader');
})