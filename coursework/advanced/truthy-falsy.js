
const products = []
const product = products[0]


// boolean or check that resolves to boolean
// if (product !== undefined) {
if (product) {
    console.log('Product found')
} else {
    console.log('Product Not found')
}

// Truthy - Values that resolve to true in a boolean context
if ('testing') {
    console.log('Results in a Truthy statement')
}

// Falsy - Values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined
if ('') {
    console.log('Will not evaluate to true')
} else {
    console.log('Results in a Falsy statment')
}

if ([] || {}){
    console.log('Empty array or object results in true.')
}

if (-1){
    console.log('Results in True for -1')
} else {
    console.log('Results in a false for -1')
}