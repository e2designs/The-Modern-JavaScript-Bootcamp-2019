
// Global Scope (convertFahrenheitToCelcius, tempOne, tempTwo)
    // Local Scope (farenheit, celsius)
        // Local Scope (isFreezing)

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}
// Call a couple of times (32 -> 0) (68 -> 20)
// Print the converted values
let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)