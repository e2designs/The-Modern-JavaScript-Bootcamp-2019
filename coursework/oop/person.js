// Constructor function
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes 
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio 
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1] 
    }
}

const myPerson = new Person('Eric', 'Evans', 46, ['Teaching'])
console.log(myPerson)
console.log(myPerson.getBio())
console.log(myPerson.setName('Julie Park'))
console.log(myPerson)


const me = new Person('Eric', 'Evans', '45', ['Python', 'Woodworking'])

me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Andrew', 'Mead', '27')
console.log(person2.getBio())