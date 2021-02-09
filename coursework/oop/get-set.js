const data = {
    set location(value) {
        this._location = value.trim()
    },
    get location() {
        return this._location
    }
}

// code that uses the data object
data.location = '  Philadelphia     '
console.log(data)
console.log(data.location)