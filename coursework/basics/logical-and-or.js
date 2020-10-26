let temp = 150
let low = 60
let high = 90
let isFreezing = temp <= 32

if (temp >= low && temp <= high){
    console.log("It is pretty nice outside. Go for it!")
} else if (temp < low && !isFreezing) {
    console.log("It is chilly outside. Wear a Jacket.")
} else if (temp < 0 || temp >= 110){
    console.log("It is not safe to go outside")
} 

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = true

// Are both vegan? - Only offer up vegan dishes
// At least one guest is vegan? - Offer up some vegan options.
// Else - Offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("Only offer vegan dishes.")
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log("Offer some vegan dishes.")
} else {
    console.log("Offer all dishes.")
}