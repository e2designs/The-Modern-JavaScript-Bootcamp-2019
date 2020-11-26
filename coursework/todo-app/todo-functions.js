// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completion status of the todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleted = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompleted
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateTodoSum(incompleteTodos))
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Generate DOM structure for a todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const completeCheck = document.createElement('input')
    const delTodo  = document.createElement('button')
    const textEl = document.createElement('span')

    // Setup checkbox for Todo
    // completeCheck.setAttribute('type', 'checkbox')
    completeCheck.type = 'checkbox'
    completeCheck.checked = todo.completed
    todoEl.appendChild(completeCheck)
    completeCheck.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


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
    delTodo.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
}

// Generate DOM structure for summary
const generateTodoSum =  (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos incomplete.`
    return summary
}