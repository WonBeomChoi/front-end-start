//start...
var input = document.getElementById("memo");
var form = document.querySelector('.new-task');
var list = document.querySelector('#list');

function addTodo(e){
    // if(e.keycode==13){
    // }
    // console.log(e);
    var todo = input.value;
    console.log(todo);
    insertTodo(todo);
    input.value = '';
    e.preventDefault();
}

function delTodo(e){


    if(e.target.className =='delete'){
        e.target.parentNode.remove();
    }
}
function insertTodo(todo){
    var html = `
    <li>
      <button class="delete" onclick="delTodo()">×</button>
      <input type="checkbox" class="toggle-checked">
      <span class="text">${todo}</span>
    </li>
   `
    list.innerHTML += html;
}

// input.addEventListener('keydown', addTodo);

document.addEventListener('click',delTodo);
form.addEventListener('submit',addTodo);