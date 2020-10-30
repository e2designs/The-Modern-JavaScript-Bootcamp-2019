// Restaraunt Tracker
// Method is an object property where its value is a function.

let restaurant = {
    name: 'Buca Di beppo',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        console.log(`Party Size: ${partySize}`)
        return (this.guestCount + partySize) <= this.guestCapacity
    },
    seatGuests: function(partySize){
        if (this.checkAvailability(partySize)){
            this.guestCount += partySize
            return true
        }
    },
    removeGuests: function(partySize){
        this.guestCount -= partySize
    },
    resetSeats: function(){
        this.guestCount = 0
    }
}

restaurant.seatGuests(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeGuests(5)
console.log(restaurant.checkAvailability(4))