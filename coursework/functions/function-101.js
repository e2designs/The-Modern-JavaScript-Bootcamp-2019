// Function - input, code, output

let greetUser = function(){
    console.log("Hello from a function")
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    console.log(num)
    let result = num * num
    return result
}


console.log(square(3))
console.log(square(10))

// Challenge Area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let convertFahrenheitToKelvin = function(fahrenheit) {
    let celcius = convertFahrenheitToCelsius(fahrenheit)
    let kelvin = celcius + 273.15
    return kelvin
}
// Call a couple of times (32 -> 0) (68 -> 20)
// Print the converted values
let temp = 32
console.log(`${temp} is ${convertFahrenheitToCelsius(temp)}c and ${convertFahrenheitToKelvin(temp)} kelvin`)
temp = 68
console.log(`${temp} is ${convertFahrenheitToCelsius(temp)}c and ${convertFahrenheitToKelvin(temp)} kelvin`)
