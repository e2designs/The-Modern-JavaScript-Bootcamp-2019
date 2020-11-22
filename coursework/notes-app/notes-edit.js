const titleElement = document.querySelector('#note-title') 
const bodyElement = document.querySelector('#note-body') 
const removeElement = document.querySelector('#remove-note')
const submitElement = document.querySelector('#submit-note')
const updatedAtElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
const timestamp = moment().valueOf()

let notes = getSavedNotes()
let note = notes.find(function (note){
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
updatedAtElement.textContent = generateLastEdited(note.updatedAt)


titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.updatedAt = timestamp
    updatedAtElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', function(e) {
    note.body = e.target.value
    note.updatedAt = timestamp
    updatedAtElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', function(e) {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

submitElement.addEventListener('click', function(e){
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('/index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        updatedAtElement.textContent = generateLastEdited(note.updatedAt)
    }
})