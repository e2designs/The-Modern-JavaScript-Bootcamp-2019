let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
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
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)   
    e.target.elements.newToDo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    console.log(`Hiding Completed: ${JSON.stringify(filters)}`)
    renderTodos(todos, filters)
})