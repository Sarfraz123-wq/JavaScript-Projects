let login = document.getElementById('login');
let register = document.getElementById('register');
let login2 = document.getElementById('login2');
let register2 = document.getElementById('register2');
let loginForm = document.querySelector('.form-container');
let regForm = document.querySelector('.reg-form-container');
regForm.style.display = 'none';

login2.addEventListener('click',loginfunction);
register.addEventListener('click',registerfunction);
function registerfunction(){
    loginForm.style.display = 'none';
    regForm.style.display = 'block';
}

function loginfunction(){
    loginForm.style.display = 'block';
    regForm.style.display = 'none';
}


