let isAccountLocked = false
let userRole = 'read-only'

if (isAccountLocked) {
    console.log(`Account is locked: ${isAccountLocked}`)
} else if (userRole === 'admin'){
    console.log('Welcome admin!')
} else {
    console.log('Welcome!')
}