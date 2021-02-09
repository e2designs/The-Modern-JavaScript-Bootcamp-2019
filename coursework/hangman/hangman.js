
// Function for tracking the word, guessedLetters and remainingGuesses
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }
    
    get puzzle() {
        let _puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                _puzzle += letter
            } else {
                _puzzle += '*'
            }
        })

        return _puzzle
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Remaining Guesses: ${this.remainingGuesses}`
        } else if (this.status === 'finished') {
            return `Great work! You guessed the word correctly!`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return `ERROR: ${this.status}`
        }
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        if (this.status != 'playing') {
            return
        }
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
        this.updateStatus()
    }

    updateStatus() {
        const finished = this.puzzle === this.word.join('')
        const failed = this.remainingGuesses < 1
        if (finished && !failed) {
            this.status = 'finished'
        } else if (failed && !finished) {
            this.status = 'failed'
        }
    }

}

const renderPuzzle = (game) => {
    console.log('renderPuzzle called')
    document.querySelector('#puzzle').innerHTML = ''
    document.querySelector('#remaining').innerHTML = ''
    document.querySelector('#puzzle').appendChild(generatePuzzleDOM(game))
    document.querySelector('#remaining').appendChild(generateRemainingDOM(game))
}

const generatePuzzleDOM = (game) => {
    const puzzleEl = document.createElement('div')
    const textEl = document.createElement('span')
    textEl.textContent = `Puzzle: ${game.puzzle}`
    puzzleEl.appendChild(textEl)
    return puzzleEl
}

const generateRemainingDOM = (game) => {
    const remainingEl = document.createElement('div')
    const textEl = document.createElement('span')
    textEl.textContent = game.statusMessage
    remainingEl.appendChild(textEl)
    return remainingEl
}