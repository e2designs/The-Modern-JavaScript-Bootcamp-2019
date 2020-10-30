let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

// pass by reference
let addExpense = function(account, expense){
    account.expenses += expense
    console.log(`Added $${expense} expense to ${account.name}`)
}

addExpense(myAccount, 2.50)
console.log(myAccount)

// pass by value
let addExpense2 = function(account, expense){
    account = {
        name: account.name,
        expenses: account.expenses,
        income: account.income
    }
    account.expenses += expense
    console.log(account)
}

addExpense2(myAccount, 4.5)
console.log(myAccount)

// Challenge area

let Account = {
    name: 'Eric Evans',
    expenses: 0,
    income: 0
}

let addIncome = function(account, amount){
    account.income += amount
    console.log(`Added $${amount} income to ${account.name}`)
}

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses 
    console.log(`Account: ${account.name}, Balance: $${balance}, Income: $${account.income}, Expenses: $${account.expenses}`)
}

addIncome(Account, 1000)
addExpense(Account, 2.50)
addExpense(Account, 5.90)
addExpense(Account, 100)
addExpense(Account, 3.75)
getAccountSummary(Account)
resetAccount(Account)
getAccountSummary(Account)
