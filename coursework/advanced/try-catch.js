
const getTip = (amount) => {
    if (typeof amount === 'number'){
        return amount * .25
    } else {
        // basic message
        // throw 'Argument must be a number'
        // provides a traceback in addition to the text.
        throw Error('Argument must be a number')
    } 
}

try {
    const result = getTip(true)
    console.log(result)
} catch (e) {
    console.log('Catch block is running')
}


try {
    const result2 = getTip(10)
    console.log(result2)
} catch (e) {
    console.log('Catch block2 is running')
}