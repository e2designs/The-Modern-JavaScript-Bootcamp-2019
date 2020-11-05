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
    const todoEl = document.createElement('div')
    const completeCheck = document.createElement('input')
    const delTodo  = document.createElement('button')
    const textEl = document.createElement('span')

    // Setup checkbox for Todo
    // completeCheck.setAttribute('type', 'checkbox')
    completeCheck.type = 'checkbox'
    todoEl.appendChild(completeCheck)


    // Generate todo text
    if (todo.text.length > 0){
        textEl.textContent = ` ${todo.text} `
    } else {
        textEl.textContent = ' Undefined Todo '
    }
    todoEl.appendChild(textEl)

    // Setup delete todo button.
    delTodo.textContent = 'x'
    todoEl.appendChild(delTodo)

    return todoEl
}

// Generate DOM structure for summary
const generateTodoSum = function (incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos incomplete.`
    return summary
}