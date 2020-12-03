const now = new Date('January 1 1970 00:00:00')
const timestamp = now.getTime()
const myDate = new Date(timestamp)
console.log(myDate.getFullYear())
// console.log(now.toString())
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const birth = new Date('January 1 1970 00:00:00')
const btimestamp = birth.getTime()

if (btimestamp < timestamp) {
    console.log(`birth: ${birth.toString()}`)
} else {
    console.log(`One: ${now.toString()}`)
}
/* const now = moment()
now.subtract(1, 'week').subtract(20, 'days')
console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())
const nowTimestamp = now.valueOf()
console.log(moment(nowTimestamp).toString()) */
const birthday = moment([1970, 0, 1])
console.log(birthday.format('MMM D, YYYY'))