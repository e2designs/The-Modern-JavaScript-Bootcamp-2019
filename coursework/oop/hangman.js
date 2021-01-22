// 1. Set up the word instance property as an array of lower case letters.
// 2. Set up another instance property to store guessed letters.
// 3. Create a method that gives you the word puzzle back. 

// No guesses? -> ***
// Guessed "c", "b", and "t"? -> c*t

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = []
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getGuess = function (guess) {
    if (this.guesses.includes(guess)){
        console.log(`Guess: '${guess}' has already been used`)
    } else {
        this.guesses.push(guess.toLowerCase())
        this.remainingGuesses -= 1
    }
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guesses.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    console.log(`Guesses: ${this.guesses} WORD: ${puzzle} you have ${this.remainingGuesses} remaining`)
}

const game1 = new Hangman('Ocean', '6')
console.log(game1)

const game2 = new Hangman('New Jersey', '5')
console.log(game2)

game1.getGuess('a')
game1.getGuess('a')
game1.getGuess('b')
game1.getGuess('N')
game1.getGuess('o')
game1.getGuess('a')

game2.getGuess('A')
game2.getGuess('e')
game2.getGuess('n')
game2.getGuess('a')