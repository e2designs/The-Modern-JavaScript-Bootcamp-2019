// 1. You can't define a variable more than once

let petName = 'Leia'
petName = 'Daisy'
console.log(petName)

// 2. There are rules to variable names

// First character Alpha, underscore or $
// let 3 = 2  // Invalid 
let $3 = 2 
let result = 3 + 4
console.log($3)
console.log(result)

// 3. Variable names cannot be reserved keywords
// let let = 12 // invalid

// Challenge area
// Temperature converter

let fahrenheit = 50 // 0c and -273.15k

// calculate and store celsius 
let celsius = (fahrenheit - 32) * 5/9
// print celsius
console.log(`Temp in celcius: ${celsius}c`)

// calculate and store kelvin
kelvin = celsius + 273.15
// print kelvin
console.log(`Temp in kelvin: ${kelvin}k`)