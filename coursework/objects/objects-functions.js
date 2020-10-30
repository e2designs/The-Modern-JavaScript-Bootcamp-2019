let myBook = {
    // Define properties are like dictionary definitions.
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


let otherBook = {
    // Define properties are like dictionary definitions.
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    console.log(`Title: ${book.title}, by ${book.author}`)
}

getSummary(myBook)
getSummary(otherBook)

// Return an object from a function
let getSumObject = function(book){
    return {
        summary: `Title: ${book.title}, by ${book.author}.`,
        pageCountSum: `Title: ${book.title} is ${book.pageCount} pages long.`
    }
}

myBook.summary = getSumObject(myBook)
otherBook.summary = getSumObject(otherBook)

console.log(myBook.summary.pageCountSum)
console.log(otherBook.summary.pageCountSum)

// Challenge Area

// Create Function - takes fahrenheit in - return object with all three values
let temperature = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: `${convertFahrenheitToCelsius(fahrenheit)}c`,
        kelvin: `${convertFahrenheitToKelvin(fahrenheit)}k`
        
    }
}

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let convertFahrenheitToKelvin = function (fahrenheit) {
    let celcius = convertFahrenheitToCelsius(fahrenheit)
    let kelvin = celcius + 273.15
    return kelvin
}

let fahrenheit = 32 // 32 degrees, 0c and 273.15k

console.log(temperature(fahrenheit))
console.log(temperature(74))