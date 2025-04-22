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

