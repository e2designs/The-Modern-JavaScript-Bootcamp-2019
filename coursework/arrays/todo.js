const todos = [{
    text: 'Walk the dog',
    completed: false
 }, {
    text: 'Feed the dog', 
    completed: true
 }, {
    text: 'Brush the dog', 
    completed: false
 }, {
    text: 'Buy Dog Food',
    completed: false
 }, {
    text: 'Cleanup after the dog',
    completed: false
 }, {
    text: 'Wash the dog', 
    completed: true
 }]

// 2. Create function to remove a todo by text value
const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}
const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed
    })
} 

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if (!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else if (a.text.toLowerCase() < b.text.toLowerCase()){
            return -1
        } else if (b.text.toLowerCase() < a.text.toLowerCase()){
            return 1
        } else {
            return 0
        }

    })
}
console.log(getThingsToDo(todos))
// deleteTodo(todos, 'buy dog food')
// console.log(todos)
sortTodos(todos)
console.log(todos)