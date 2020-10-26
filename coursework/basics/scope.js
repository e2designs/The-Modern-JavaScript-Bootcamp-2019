// Lexical Scope (Static Scope)


// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)


let varOne = 'varOne'


if (true){
    console.log(varOne)

    let varTwo = 'varTwo' // Only available within this local scope. 
    console.log(varTwo)
    
    if (true) {
        let varFour = 'varFour'
    }
}


if (true){
    let varThree = 'varThree'
}

console.log(varTwo) // Fails