let current = document.getElementById('current');
let images = document.querySelectorAll('.images img');
let opacity = 0.4;

images.forEach(callback);
function callback(img){
    img.addEventListener('click',function(e){
        // If i see more than one image at a time the opacity applies to all images.
        // so Reset opacity to all except current image.
        images.forEach(imgs =>{
            imgs.style.opacity = 1;
        })
       current.src = e.target.src;
       e.target.style.opacity = opacity;
    })
}