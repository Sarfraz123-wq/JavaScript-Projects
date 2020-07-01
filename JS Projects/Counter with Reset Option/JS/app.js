// alert("sarfraz")
let countValue = document.querySelector('.countValue');
let btns = document.querySelectorAll('.btn');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');

// Method 1

// increment.addEventListener('click',incrementor);
// decrement.addEventListener('click',decrementor);
// reset.addEventListener('click',resetFunction);

// let count = 0;
// if(count===0){
//     countValue.style.color = 'yellow';
// }
// function incrementor(){
//     count++;
//     if(count>0){
//         countValue.style.color = 'green';
//     }
//     countValue.innerHTML = count;
// }
// function decrementor(){
   
//     count--;
//     if(count<0){
//         countValue.style.color = 'red';
//     } 
//     countValue.innerHTML = count;
// }
// function resetFunction(){
//     count=0;
//     if(count===0){
//         countValue.style.color = 'yellow';
//     }
//     countValue.innerHTML = count;
// }

// Method 2

let count = 0;
btns.forEach(function (btn){
    
    btn.addEventListener('click',function(e){
        let styles = e.currentTarget.classList;
        if(styles.contains('decrement')){
            count--;
        }
        else if(styles.contains('increment')){
            count++;
        }
        else if(styles.contains('reset')){
            count=0;
        }
        if(count>0)
            countValue.style.color = 'green';
        if(count<0)
            countValue.style.color = 'red';
        if(count==0)
        countValue.style.color = 'yellow';

        countValue.textContent = count;
    })
        
})