// DOM - Document Object Model

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Maui.'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating better'
}, {
    title: 'Office Modification',
    body: 'Build a new spaced'
}]


document.querySelector('button').addEventListener('click', function(e){
    e.target.textContent = 'I was clicked!'
})
