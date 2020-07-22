let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let mints = document.querySelector('.mints');
let sec = document.querySelector('.sec');
let msec = document.querySelector('.msec');
// start.addEventListener('click',startWatch);
// stop.addEventListener('click',stopWatch);
// reset.addEventListener('click',resetWatch);


let count=0;
let timesec=0;
let timemints=0;
function startWatch () {
     abc = setInterval(() => {
       if(count==100){
           timesec++;
           sec.innerHTML = timesec;
           count=0;
       }
       if(timesec==60){
        timemints++;
        mints.innerHTML = timemints;
        timesec=0;
    }
   count++;
   msec.innerHTML = count;
}, 10);  
    start.disabled = true;
};
function stopWatch() {
    clearInterval(abc);
    start.disabled = false;
}
function resetWatch(){
    count=0;
    timesec=0;
    timemints=0;
    msec.innerHTML = 0;
    sec.innerHTML = 0;
    mints.innerHTML = 0;
    stopWatch();
    start.disabled = false;
}
    
