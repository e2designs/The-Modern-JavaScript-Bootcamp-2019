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

// use # for ids, also used for css
document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'I was clicked!'
})

// By using array location, it is closely coupled with html order.
document.querySelector('button#remove-all').addEventListener('click', function(e){
    console.log('Delete all notes.')
    // use . for classes
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

// -- Single --
// p
// #replace
// .item

// -- Multiple --
// p#order
// button.inventory
// h1#title.application
// h1.application#title