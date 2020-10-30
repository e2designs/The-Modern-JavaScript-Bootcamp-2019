let num = 103.942

// toFixed Method
console.log(num.toFixed(2))

// toString
console.log(num.toString())

// math.round
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.log(Math.random())

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge area

// Guessing game
let checkGuess = function(num){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return num === randomNum
}

// Random number is generated each time this is called.
console.log(checkGuess(1))
console.log(checkGuess(2))
console.log(checkGuess(3))
console.log(checkGuess(4))
console.log(checkGuess(5))