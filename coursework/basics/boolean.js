// === equality operator
// !== inequality operator
// < less than
// > greater than
// <= less than or equal
// >= greater than or equal

let temp = 100 // Fahrenheit
let isFreezing = temp <= 32

// console.log(isFreezing) 
if (isFreezing){ // Flow control
    console.log(`IT IS FREEZING OUTSIDE!`);
} else if (temp >= 101){
    console.log('It is way too hot outside.');
} else if(temp <= 60){
    console.log('Might want to wear a jacket, go outside.');
} else {
    console.log('Temperature is fine, go outside.');
}

// Challenge area
// Discounts for Children and Seniors

let age = 45
let childAge = 7
let seniorAge = 65
let srDiscount = age >= seniorAge
let chDiscount = age <= childAge
discount = chDiscount || srDiscount

// console.log(`Age: ${age} qualifies for a discount: ${discount}`)
// console.log(`Child Discount: ${chDiscount}`)
// console.log(`Senior Discount: ${srDiscount}`)

if (chDiscount){
    console.log('You qualify for the Child Discount')
} else if (srDiscount){
    console.log('You qualify for the Senior Discount')
} else {
    console.log('No discount applies.')
}
