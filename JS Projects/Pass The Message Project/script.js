const sendBtn = document.getElementById('sendBtn');
const messageIn = document.getElementById('messageIn');
const messageOut = document.getElementById('messageOut');


sendBtn.addEventListener('click',sendMsg);

function sendMsg(){
    let content = messageIn.value;
 //   console.log(content)
    messageOut.innerHTML = content;

    if(messageIn.value === ''){
        alert('Please insert a valid value');
    }

}