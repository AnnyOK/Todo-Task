const todosDiv = document.querySelector("#todos")
let todoInput = document.querySelector("#create_todo")
todoInput.addEventListener("keydown", (e) => {
  let todos = []
  if(e.keyCode === 13){
    const newTodo = document.createElement("p")
    newTodo.innerHTML = todoInput.value
    todosDiv.append(newTodo)
    todoInput.value = " "
  }
})
