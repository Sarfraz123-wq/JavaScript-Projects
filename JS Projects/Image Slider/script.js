const nextBtn = document.getElementById('nextbtn');
const prevBtn = document.getElementById('prevbtn');
const images = document.querySelector('.image-container');

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);
let counter=0;
function nextSlide(){
    if(counter === 3){
        counter=-1
    }
    counter++;
    
    images.style.backgroundImage = `url(Images/bg-${counter}.JPG)`

}
function prevSlide(){
   if(counter===0)
   {
       counter=5;
   }
   counter--;
    images.style.backgroundImage = `url(Images/bg-${counter}.JPG)`

}