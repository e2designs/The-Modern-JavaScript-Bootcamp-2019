// 1. Delete Dummy Data
// 2. Read and Parse the data when the app starts up.
// 3. Stringify and write the data when new data is added.

let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

const todoJSON = localStorage.getItem('todos')
if (todoJSON !== null){
    todos = JSON.parse(todoJSON)
}

const notComplete = function(todos){
    return todos.filter(function(todo){
        return !todo.completed
    })
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        matchedTodo = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        hideCompleted = !filters.hideCompleted || !todo.completed
        
        return matchedTodo && hideCompleted
    })
    const numToDo = notComplete(filteredTodos).length

    document.querySelector('#todos').innerHTML = ''
    const notCompEl = document.createElement('h2')
    notCompEl.textContent = `You have ${numToDo} todos incomplete.`
    document.querySelector('#todos').appendChild(notCompEl)
    filteredTodos.forEach(function(todo){
        const todoElement = document.createElement('p')
        if (todo.text.length > 0){
            todoElement.textContent = todo.text
        } else {
            todoElement.textContent = 'Undefined Todo'
        }
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
    todos.push({
        text: e.target.elements.newToDo.value, 
        complete: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)   
    e.target.elements.newToDo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})