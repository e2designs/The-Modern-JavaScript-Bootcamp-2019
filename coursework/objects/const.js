// Constants

const isRaining = true

// error as the constant is not mutable
// isRaining = false

console.log(isRaining)

// Constant object, but the attributes are mutable.
const person = {
    age: 27,
    id: 1234
}

person.age += 1
person.name = "Andrew"

console.log(person)