//selectors - create objects - properties can change but object can't or can't be const
const todoInput: HTMLInputElement = (<HTMLInputElement>document.querySelector('.todo_input'));
const todoButton: HTMLButtonElement = (<HTMLButtonElement>document.querySelector('.todo_button'));
const todoList: HTMLUListElement = (<HTMLUListElement>document.querySelector('.todo_list'));
const filterOption: HTMLSelectElement = (<HTMLSelectElement>document.querySelector('.filter_todo'));
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);   
//functions
function addTodo(event: Event) {  //passing in event object when button event is clicked
    event.preventDefault();  //preventdefault method of the event - cancels the event - default action of event will not occur - prevent from submitting a form?
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI within div
    const newTodo = document.createElement('li');  //creating list items
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);      //adding list item to tododiv
    if(todoInput.value === ""){
        return null
    }
    //check mark BUTTON - added after the list item
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //delete BUTTON - added after the list item
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);   //appending delete button
    //Append to Actual LIST (along with the complete and trash buttons)
    todoList.appendChild(todoDiv);  //adding div to the page - list item and buttons
    //Clear todo input VALUE
    todoInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e: Event) {   //e is the event when button click
    const item: HTMLButtonElement = <HTMLButtonElement>e.target;   //button that was clicked
    const todo: HTMLDivElement = <HTMLDivElement>item.parentElement;  //todo is div - parent element is div 
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {  //list of classes that we added - element zero of classlist 
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {   //???
            todo.remove()                 //deletes/removes todo which was div
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        //const todo = item.parentElement;
        todo.classList.toggle("completedItem")      //toggles - add or remove class
    }
}
//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e: Event) {
    const todos = todoList.childNodes;          //list of all LI items
    for(let i = 0; i<todos.length; i++ ){       //loop through list
        switch (e.target.value) {               //switch is nested if  - target is click event
            case "all":
                todos[i].style.display = "flex";       //change style css to flex - show all
                break;  //get out
            case "completed":
                if (todos[i].classList.contains('completedItem')) {  // change display to flex or none (don't display)
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) { // if not completed, then uncompleted - change display
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";  //won't show
                }
                break;
        }
    }
} 