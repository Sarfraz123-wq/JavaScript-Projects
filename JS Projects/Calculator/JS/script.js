let btns = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');
let equalBtn = document.querySelector('.btn-equal');
let clearBtn = document.querySelector('.btn-clear');


for(let i=0; i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        let number = btns[i].getAttribute('data-num');
        screen.value+=number;
    })
}
equalBtn.addEventListener('click',function(){
   if(screen.value === '')
   {alert('input is must')}
   else{
    let value = eval(screen.value);
    screen.value = value;
}
})
clearBtn.addEventListener('click',function(){
    screen.value='';
})