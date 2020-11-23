const add = function (a, b) {
    console.log(arguments)
}

// Only available in a normal arguments function.
const add2 = function () {
    return arguments[0] + arguments[1]
}


// Will fail with specific node message
/* [object Object]function require(path) {
    return mod.require(path);
} */
const add3 = () => {
    return arguments[0] + arguments[1]
}

add(11, 22, 33, 44)

console.log(add2(11, 22, 33, 44))
console.log(add3(11, 22, 33, 44))

const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}` 
    },
    getSum2: () => {
        // Undefined as arrow function cannot access this.
        return `The car is ${this.color}`
    },
    // Shorthand for method
    getSum3(){
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())
console.log(car.getSum2())
console.log(car.getSum3())
