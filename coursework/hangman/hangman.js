
// Function for tracking the word, guessedLetters and remainingGuesses
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
}

// Get Puzzle prototype - Returns the curent puzzle state (solved or unsolved letters)
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

// Process guess from user
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        this.guessedLetters.push(guess)
    } else {
        console.log(`Guess: '${guess}' has already been used`)
    }
    
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}

