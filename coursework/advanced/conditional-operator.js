const myAge = 27
const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

/* if (myAge >= 18) {
    message = 'You can vote.'
} else {
    message = 'You cannot vote'
} */

console.log(message)

const yourAge = 45
/* const showPage = () => {
    console.log('Show the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}

yourAge >= 21 ? showPage() */

const showPage = () => 'Show the page'
const showErrorPage = () => 'Show the error page'

const message2 = yourAge >= 21 ? showPage() : showErrorPage()
console.log(message2)

// Challenge
const team = ['Tyler', 'Porter', 'Craig']
const team2 = ['Tyler', 'Porter', 'Craig', 'Geoff', 'Mary']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team!')
console.log(team2.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team!')