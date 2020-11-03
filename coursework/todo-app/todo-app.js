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

// 1. Setup a div to contain todos
// 2. Setup filters (searchText) and wire up a new filter input to change it.
// 3. Create a renderTodos function to render and rerender the latest filtered data.

const filters = {
    searchText: ''
}



const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const numToDo = filteredTodos.filter(function(todo){
        return !todo.completed
    }).length

    document.querySelector('#todos').innerHTML = ''
    const notCompEl = document.createElement('h2')
    notCompEl.textContent = `You have ${numToDo} todos incomplete.`
    document.querySelector('#todos').appendChild(notCompEl)
    filteredTodos.forEach(function(todo){
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.text
        document.querySelector('#todos').appendChild(todoElement)
    })
}

renderTodos(todos, filters)
// Listen for new todo creation
document.querySelector('button#add-todo').addEventListener('click', function(e){
    console.log('Adding a new ToDo')
})

// Capture new todo text.
document.querySelector('#new-todo').addEventListener('input', function(e){
    console.log(e.target.value)
})

// Capture search string
document.querySelector('#search-todo').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})