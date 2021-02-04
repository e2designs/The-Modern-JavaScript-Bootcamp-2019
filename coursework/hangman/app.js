const game1 = new Hangman('Ocean', '6')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})
