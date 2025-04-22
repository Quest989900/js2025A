// 1. Monthly Budget Calculator
// Given an array of your monthly expense amounts,
// use a loop to compute the total expense and then
// calculate the average.

let monthlyExpense = [2000, 1000, 8000, 2000, 1000, 3000, 2000, 2000, 4000, 5000, 7000, 5000]
let totalExpense = 0


for (let i = 0; i < monthlyExpense.length; i++){
    totalExpense += monthlyExpense[i]
}
let average = totalExpense / monthlyExpense.length
console.log(
  "Total Expense is #" + totalExpense + ',' + " " +
  "Average Expense is #" + average
)



// 2.Temperature Analyzer
// With an array of daily temperatures (in °C),
// find the highest and lowest temperatures by
// iterating once through the array.

let temperature = [15, 24, 19, 25, 32, 22, 29]
let highestTemperature = temperature[0]
let lowestTemperature = temperature[0]

for (let i = 0; i < temperature.length; i++){
    if (temperature[i] > highestTemperature) { 
        highestTemperature = temperature[i]
    }
    else if (temperature[i] < lowestTemperature) {
      lowestTemperature = temperature[i];
    }
}

console.log( "Highest Temperature is " + highestTemperature + "°C" + "," + " " + "Lowest Temperature is " + lowestTemperature + "°C")

// 3. Discounted Prices Generator
// Given an array of product prices and a fixed
// discount rate (e.g. 10%), loop through the prices
// to build a new array of discounted prices.

let productPrices = [20, 40, 100, 500, 30]
let fixedDiscountRate = 0.10
let discountedPrice = []

for (let i = 0; i < productPrices.length; i++){
 let discount = productPrices[i] - (productPrices[i] * fixedDiscountRate )
discountedPrice.push(discount)
}

console.log(discountedPrice)

// 4. Counting Age Groups
// From an array of people’s ages, count how many
// are minors (under 18) and how many are adults
// (18 and over).

let Ages = [15, 11, 38, 45, 65, 12, 28, 23, 58, 69, 78]
let minors = 0
let adults = 0

for (let i = 0; i < Ages.length; i++){
    if (Ages[i] < 18) {
        minors++
    }
    else if (Ages[i] >= 18) {
        adults++
    }
}

console.log('Minors: ' + minors + '  ' +  'Adults: ' + adults)

// 5. High‑Spending Transactions
// Given an array of amounts , 
// find and collect all amounts above a 
// certain threshold (e.g. N1000) into a new array.


let amounts = [2000, 400, 1200, 5000, 450]
let highSpendings = []

for (let i = 0; i < amounts.length; i++){
    if (amounts[i] > 1000) {
        highSpendings.push(amounts[i])
    }
}
console.log(highSpendings)