var firstName = 'Andrew'
firstName = 'Mike'
// var is mutable and can be redeclared
var firstName = 'Jen'
console.log(firstName)

// var scope
if (10 === 10){
    var lastName = 'Doe'
    let firstName = 'Eric'
}

// var is not scope dependant
console.log(lastName)
console.log(firstName)

const setName = function () {
    var newName = 'Kandee'
}

setName()
// Will fail as var newName scope is limited to the function only
// console.log(newName)

// creating a variable with var places that definition at the top, even if assigned later.
console.log(age) // prints undefined.
var age = 10


// var is moved to the top at run time. 
help = 10
console.log(help)
var help