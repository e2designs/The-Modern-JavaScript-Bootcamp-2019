/*
const notes = ['Note 1', 'Note 2', 'Note 3']

notes.push('Note4')
console.log(notes)
console.log(notes.length)

console.log(notes[0])
console.log(notes[5])
console.log(notes[notes.length - 1])

let note = notes.pop()
console.log(note)
console.log(notes)

// shift and unshift
console.log(notes.shift())
console.log(notes)

console.log(notes.unshift('New Start'))
console.log(notes)

// splice
const newNotes = [1, 2, 3, 4, 5]
console.log(newNotes.splice(1, 2))
console.log(newNotes)

console.log(newNotes.splice(1, 0, 'New Item'))
console.log(newNotes)

console.log(newNotes.splice(1, 2, 'Adding a new with replace'))
console.log(newNotes)

console.log(newNotes[2] = 'New replacement')
console.log(newNotes)

const notes3 = ['Note 1', 'Note 2', 'Note 3', 'Note 4']

// callback function
notes3.forEach(function(item, index){
    console.log(index, item)
})

// Counting... 1
for (let num = 0; num <= 2; num ++){
    console.log(`Counting... ${num}`)
}

// count is locally scoped in the for statement
for (let count = 0; count < notes3.length; count++){
    console.log(`Note ${count + 1}: ${notes3[count]}.`)
}

// reverse order
for (let count = notes3.length - 1; count >= 0; count--){
    console.log(`Note ${count + 1}: ${notes3[count]}.`)
}

// Notes as objects
console.log(notes3.indexOf('Note 2'))
console.log(notes3.indexOf('note 2')) // returns -1

notes4 = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Maui.'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating better'
}, {
    title: 'Office Modification',
    body: 'Build new space'
}]


console.log(notes4)
console.log(notes4.indexOf({})) // Returns -1
// Does not make two objects equal. This compares the memory location
console.log({} === {})

let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject) // True
// Can't use indexOf. Use findIndex()
const index = notes4.findIndex(function(note, index){
    console.log(index, note)
    // Specify search criteria.
    return note.title === 'Habbits to work on'
})

console.log(index)
*/

notes = [{
    title: 'My next trip',
    body: 'I would like to go to Maui.'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating better'
}, {
    title: 'Office Modification',
    body: 'Build new space'
}]

// Find returns object
const findNote = function (notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// Find index for the index number
// const findNote = function (notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// Arrays are passed by reference
const note = findNote(notes, 'office modification')
console.log(note)