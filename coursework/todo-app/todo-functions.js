// Fetch existing todos from localStorage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null){
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompleted
    })

    const incompleteTodos = filteredTodos.filter(function (todo){
        return !todo.completed
    })
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateTodoSum(incompleteTodos))
    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Generate DOM structure for a todo
const generateTodoDOM = function(todo){
    const todoElement = document.createElement('p')
    if (todo.text.length > 0){
        todoElement.textContent = todo.text
    } else {
        todoElement.textContent = 'Undefined Todo'
    }
    return todoElement
}

// Generate DOM structure for summary
const generateTodoSum = function (incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos incomplete.`
    return summary
}