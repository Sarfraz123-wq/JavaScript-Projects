let input = document.querySelector('.input');
let addbtn = document.querySelector('.add');
let ul = document.querySelector('.ul');
let deleteallbtn = document.querySelector('.deleteall');
addbtn.addEventListener('click',function(){
  let li = document.createElement('li');
  li.innerHTML = input.value;
  ul.appendChild(li);
  li.style.display = 'inline-block';
  input.value = '';
  // Creating add and delete btns
  var Edit = document.createElement('button');
  Edit.className = 'editBtn';
  Edit.innerHTML = 'Edit';
  ul.appendChild(Edit);
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.innerHTML = 'Delete';
  ul.appendChild(deleteBtn);

// For delete all
deleteallbtn.addEventListener('click',function(){
  ul.innerHTML = '';
})
// For delete btn
deleteBtn.addEventListener('click',function(e){
  li.remove();
  Edit.remove();
  deleteBtn.remove();
})
// For edit btn
Edit.addEventListener('click',function(){
  let editText = prompt('Change your list item',li.innerHTML);
  li.innerHTML = editText;

})
})
