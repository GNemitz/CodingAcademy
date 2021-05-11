//selectors
var todoInput = document.querySelector('.todo_input');
var todoButton = document.querySelector('.todo_button');
var todoList = document.querySelector('.todo_list');
var filterOption = document.querySelector('.filter_todo');
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//functions
function addTodo(event) {
    event.preventDefault();
    //todo DIV
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === "") {
        return null;
    }
    //check mark BUTTON - added after the list item
    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);
    //delete BUTTON - added after the list item
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);
    //Append to Actual LIST (along with the complete and trash buttons)
    todoList.appendChild(todoDiv);
    //Clear todo input VALUE
    todoInput.value = "";
}
//DELETE & CHECK
function deleteCheck(e) {
    var item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        var todo_1 = item.parentElement;
        //ANIMATION TRANSITION
        todo_1.classList.add("fall");
        todo_1.addEventListener('transitionend', function () {
            todo_1.remove();
        });
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        var todo = item.parentElement;
        todo.classList.toggle("completedItem");
    }
}
//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {
    //let todos: string[] = todoList.childNodes;
    var todos = todoList.childNodes;
    for (var i = 1; i < todos.length; i++) {
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                }
                else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                }
                else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
}
