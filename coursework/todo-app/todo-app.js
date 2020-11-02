// query all and remove any p tag where the word `the` is present
const elements = document.querySelectorAll('p')
elements.forEach(function(tag){
    const target = 'the'
    if (tag.textContent.toLowerCase().includes(target)){
        console.log(`Removing ${tag.textContent}`)
        tag.remove()
    }
    
}) 