// Multiple arguments
let add = function(a, b, c){ 
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments

let getScoreText = function(name='Anonymous', score=0){
    return `NAME: ${name}, SCORE: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Challenge area

let tipAmount = function(total, tipPercent=.20){
    let tipTotal = total * tipPercent
    return `For a total bill of $${total} the tip amount is $${tipTotal} for ${tipPercent * 100}%` 
}

let bill = 100
let tipPercent
console.log(tipAmount(bill))

bill = 30
tipPercent = .10
console.log(tipAmount(bill, tipPercent))
