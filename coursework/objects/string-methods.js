let name = 'Andrew Mead'

// Length Property
console.log(name.length)

// Upper Method
console.log(name.toUpperCase())

// Lower Method
console.log(name.toLowerCase())

// Includes Method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim Method
let input = ' Some data with a '
console.log(`:${input.trim()}:`)

// Challenge area
// isValidPassword
let isValidPassword = function(password){
    // length is > 8 and does not include password in the string
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpassword123df'))