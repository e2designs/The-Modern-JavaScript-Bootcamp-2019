let name
// Undefined is the absence of a value.
// Undefined is implicetly set.

name = 'Jen'
if (name === undefined){
    console.log('Please define a name')
} else {
    console.log(name)
}

// Undefined for function arguments

let square = function(num){
    console.log(num)
}
// Undefined as the function return value
let result = square()

console.log(result)

// Clear a variable to undefined
let age = 27
// age = undefined // Does not let you know if this was language default or by developer call. use null instead
age = null
console.log(age)