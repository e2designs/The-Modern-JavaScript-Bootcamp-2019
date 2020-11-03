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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        // noteEl.classList.appendChild('.note')
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

// use # for ids, also used for css
document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'I was clicked!'
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})