// product --> Object.prototype --> null
const Product = function () {
    this.name = 'Influence'
}

Product.prototype.getName = function () {
    return this.name
}
myProduct = new Product()
// hasOwnProperty
console.log(Product.hasOwnProperty('getName'))
console.log(Product)
console.log(myProduct.hasOwnProperty('name'))
console.log(myProduct.hasOwnProperty('getName'))
console.log(myProduct.getName())

const person = {
    name: 'Eric'
}
person.hasOwnProperty = () => console.log('Do not do this')
console.log(person)
