const data = {
    locations: [],
    set location(value) {
        this._location = value.trim()
        this.locations.push(value.trim())
    },
    get location() {
        return this._location
    }
}

// code that uses the data object
data.location = '  Philadelphia     '
console.log(data)
console.log(data.location)
data.location = ' New York'
console.log(data)
console.log(data.locations)
console.log(data.location)

