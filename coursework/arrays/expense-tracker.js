const account = {
    name: 'Andrew Mead',
    // Expense -> description, amount
    expenses: [],
    // income to array account
    income: [],
    balance: 0,
    // addExpense -> description, amount
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    // addIncome method -> description, amount
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    // getAccountSummary - > Total up all expenseses -> Andrew Meed has $1250 in expenses.
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(expense => totalExpenses += expense.amount)
        this.income.forEach(check => totalIncome += check.amount)
        this.balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${this.balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addIncome('Work', 250)
account.addIncome('Project B', 750)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addExpense('Donuts', 5)
console.log(account.getAccountSummary())