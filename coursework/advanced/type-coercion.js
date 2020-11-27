// Type coercion - to a string, number or a boolean

// Type coercion as string
console.log('5' + 5)

// Type coercion as number context
console.log('5' - 5)

// Type coercion as boolen
const mynumber = '6'

console.log(mynumber ? 'Number assinged' : 'Number not assigned')

// true
console.log(5 === 5)

// true with loose equality
console.log('5' == 5)

// false
console.log('5' === 5)

console.log(typeof 123)
console.log(typeof {})
console.log(typeof [])
console.log(typeof 'see me')

const value = true + 12
const type = typeof value
console.log(type)
console.log(value)