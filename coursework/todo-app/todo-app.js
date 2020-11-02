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

const getThingsToDo = todos.filter(function(todo){
        return !todo.completed
})

numToDo = getThingsToDo.length

// You have 4 todos left (p element)
const newParagraph = document.createElement('h2')
newParagraph.textContent = `You have ${numToDo} todos left.`
document.querySelector('body').appendChild(newParagraph)

 // Add a p for each todo above (using text value)
todos.forEach(function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// Listen for new todo creation
document.querySelector('button#add-todo').addEventListener('click', function(e){
    console.log('Adding a new ToDo')
})