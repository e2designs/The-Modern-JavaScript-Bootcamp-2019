// DOM - Document Object Model

// console.log('This is from a separate file.')
// query and remove
const element = document.querySelector('p')

// console.log(element)
// // remove a single element
// element.remove()

// query all and remove
const elements = document.querySelectorAll('p')
elements.forEach(function(tag){
    tag.textContent = '*********'
    // console.log(tag.textContent)
    // tag.remove()
}) 

// Add a new Element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from javascript.'
document.querySelector('body').appendChild(newParagraph)
