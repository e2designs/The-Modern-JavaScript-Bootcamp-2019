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

// Capture search string
document.querySelector('#search-todo').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({text: e.target.elements.newToDo.value, complete: false})
    renderTodos(todos, filters)   
    e.target.elements.newToDo.value = ''
})