const form = document.getElementById('todo-cont'),
  input = document.getElementById('input'),
  todosUL = document.getElementById('todos');

  // on loading load the content of list from local storage
  document.addEventListener('DOMContentLoaded', allStorage());

  // on sumbit of the todo-cont form do this function
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    setTodo();
  })

  // add a new todo element
  function setTodo(){
    let todoText = input.value;
    console.log(todoText);

    let todoEl = document.createElement('li');
    itemN = Object.keys(localStorage).length + 1;
    todoEl.id = 'todo' + itemN;
    todoEl.innerText = todoText;
    console.log(todoEl);
    todosUL.appendChild(todoEl);
    input.value = '';

    localStorage.setItem(todoEl.id, todoText);

    todoEl.addEventListener('click', (e)=>{
      todoEl.remove();
      localStorage.removeItem(todoEl.id);
    });
  } 

  // load elements from storage
  function allStorage(){
    console.log('allStorage');
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while (i--){
      values.push(localStorage.getItem(keys[i]));
    }
    for(i=0; i<keys.length; i++){
      viewTodo(keys[i], values[i])
    }
  }

  // create the list on loading
  function viewTodo(key, value){
    console.log('viewTodo');
    let todoEl = document.createElement('li');
    todoEl.id = key;
    todoEl.innerText = value;
    todosUL.appendChild(todoEl);

    todoEl.addEventListener('click', (e)=>{
      todoEl.remove();
      localStorage.removeItem(todoEl.id);
    });
  }







