//selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
//event listeners
todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click",deletecheck)

//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todoDiv
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    //create Li
    const newTodo=document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK button
    const completedButton=document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);
    //Trash Button
    const trashButton=document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
}
function deletecheck(event){
    const item=event.target;
    // delete Todo
    if(item.classList.contains('trash-button')){
        todo=item.parentElement;
        todo.remove();
    }
    //add complete
    if(item.classList.contains('complete-button')){
        todo=item.parentElement;
        todo.classList.toggle('completed');
    }
    

}
