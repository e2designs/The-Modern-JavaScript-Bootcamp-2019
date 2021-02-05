const game1 = new Hangman('New Jersey', '6')
let puzzle = game1.getPuzzle()
let remainingGuesses = game1.remainingGuesses
renderPuzzle(game1)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    renderPuzzle(game1)
})
