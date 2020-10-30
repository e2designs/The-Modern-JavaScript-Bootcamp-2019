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
const getThingsToDo= function(todos){
    return todos.filter(function(todo){
        return !todo.completed
    })
} 

console.log(getThingsToDo(todos))
// deleteTodo(todos, 'buy dog food')
// console.log(todos)