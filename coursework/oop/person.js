// Constructor function
// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

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

    set fullname(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1] 
    }

}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        let bio = `${this.firstName} ${this.lastName} is a ${this.position}.`
        return bio
    }

    getRetirement() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes) 
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing!' : 'failing'
        return `${ this.firstName } is ${status}`
    }
    updateGrade(grade) {
        this.grade += grade
    }
}

const mary = new Student('Mary', 'Smith', 16, 60, ['Computers'])
mary.fullname = 'Eric Evans'
console.log(mary)
console.log(mary.getBio())
mary.updateGrade(20) 
console.log(mary.getBio())
mary.updateGrade(-30) 
console.log(mary.getBio())