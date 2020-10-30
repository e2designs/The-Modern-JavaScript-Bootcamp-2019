// basic object is just a set of {}
let myBook = {
    // Define properties are like dictionary definitions.
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook)
console.log(`Title: ${myBook.title}, by ${myBook.author}`)
myBook.price = 50
console.log(myBook)

myBook.author = 'Animal Farm'
myBook.pageCount = 112
myBook.price = 5.99
console.log(myBook)

// Challenge area
// model person
// name, age, location

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

let message = function(person){
    console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

}

message(person)
person.age += 1
message(person)