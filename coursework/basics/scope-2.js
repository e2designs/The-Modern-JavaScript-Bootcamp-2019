// Global (name)
    // Local (name)
        // Local
    // Local


// let name = 'Eric'

if(true){
    // let name = 'Mike' // variable shadowing
    if (true) {
        name = 'Jen' // Leaked global when Name is not explicitly defined in a parent.
        console.log(name)
    }
    console.log(name)
}

if (true) {
    console.log(name)
}