// Create an array with 5 todos
// Log You have x todos
// Print the first and second to the last items -> Todo: walk the dog

//const todos = ['Walk the dog', 'Feed the dog', 'Brush the dog', 'Wash the dog', 'Cleanup after the dog']

// // Delete 3rd item
// console.log(todos.splice(2, 1))
// // add new item onto the end
// console.log(todos.push('New dog item'))
// // Remove the first item from the list.
// console.log(todos.shift())

/*
console.log(`You have ${todos.length} todos`)
// Output all todos with forEach
// Count in order
todos.forEach(function(item, index){
    console.log(`${index + 1}. ${item}.`)
})

// Output all todos with for
// Count in a different order or conditional
for (count = 0; count < todos.length; count++){
    console.log(`${count + 1}. ${todos[count]}.`)
}
*/

// 1. Convert array to array of objects
//    text: Task todo.
//    completed: boolean
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
    completed: true
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

deleteTodo(todos, 'buy dog food')
console.log(todos)