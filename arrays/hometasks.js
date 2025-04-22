// 1. Monthly Budget Calculator
// Given an array of your monthly expense amounts,
// use a loop to compute the total expense and then
// calculate the average.

let monthlyExpense = [20000, 12000, 8000, 15000, 10000, 300000, 250000, 25000, 4000, 5000, 7400, 500000]
let totalExpense = 0


for (let i = 0; i < monthlyExpense.length; i++){
    totalExpense += monthlyExpense[i]
}

console.log('Total Expense is #' + totalExpense)

let average = totalExpense / monthlyExpense.length
console.log("Average Expense is #" + average);
