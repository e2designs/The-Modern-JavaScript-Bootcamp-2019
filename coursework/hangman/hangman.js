// 1. Set up the word instance property as an array of lower case letters.
// 2. Set up another instance property to store guessed letters.
// 3. Create a method that gives you the word puzzle back. 

// No guesses? -> ***
// Guessed "c", "b", and "t"? -> c*t

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)
    if (isUnique) {
        this.guessedLetters.push(guess)
        this.remainingGuesses--
    } else {
        console.log(`Guess: '${guess}' has already been used`)
    }
    // console.log(`Guesses: ${this.guesses} WORD: ${puzzle} you have ${this.remainingGuesses} remaining`)
}

const game1 = new Hangman('Ocean', '6')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})