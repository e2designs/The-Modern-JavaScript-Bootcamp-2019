
notes = [{
    title: 'My next trip',
    body: 'I would like to go to Maui.'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating better'
}, {
    title: 'Office Modification',
    body: 'Build a new spaced'
}]

const sortNotes = function(notes) {
    notes.sort(function(a, b){
        const alpha = a.title.toLowerCase()
        const beta = b.title.toLowerCase()
        if (alpha < beta){
            return -1
        } else if (alpha > beta){
            return 1
        } else {
            return 0
        }
    })
}

// Find returns object
const findNote = function (notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// Search for note
const findNotes = function(notes, query){
    return notes.filter(function (note){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


// Arrays are passed by reference
// const note = findNote(notes, 'office modification')
// console.log(note)

// console.log(findNotes(notes, 'to'))

sortNotes(notes)
console.log(notes)