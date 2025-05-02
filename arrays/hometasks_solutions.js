/*
1. Monthly Budget Calculator
Given an array of your monthly expense amounts, 
use a loop to compute the total expense and then 
calculate the average.
*/

let monthlyExpenses = [20, 35, 15, 25, 30];

let total = 0;


for( let i = 0; i < monthlyExpenses.length; i++ ){
    total += monthlyExpenses[i]

}
 let average = total / monthlyExpenses.length
// console.log(total)
// console.log(average)

/*
2.Temperature Analyzer
With an array of daily temperatures (in °C), 
find the highest and lowest temperatures by 
iterating once through the array.
*/
let temperature = [20, 30, 75, 40, 85,50, 60, 65,]

let highestTemp = temperature[0];
let lowerTemp = temperature[0];

for (let i = 1; i < temperature.length; i++){

    if(temperature[i] > highestTemp){
        highestTemp = temperature[i]
        // lowerTemp = lowerTemp

    }else if(temperature[i] < lowerTemp){
    lowerTemp = temperature[i]
    }
    else {
        continue
    }

} 
// console.log('the higest temperature is', highestTemp)
// console.log('the lowest temperature is', lowerTemp)
/*
3. Discounted Prices Generator
Given an array of product prices and a fixed 
discount rate (e.g. 10%), loop through the prices 
to build a new array of discounted prices.
*/

let prices= [50,60,70,80,90]
let discountRate = 10
let discountedprice = []
for(let i = 0; i<prices.length; i++){
    let discount = prices[i] * (discountRate / 100)
    let discountedprices = prices[i] - discount
    discountedprice.push(discountedprices)
}
// console.log(discountedprice)

/*
4. Counting Age Groups
From an array of people’s ages, count how many 
are minors (under 18) and how many are adults 
(18 and over).
*/
let age=[20,7,18,32,17]
let minor = 0
let adult = 0


for (let i =0; i < age.length;i++){
   if(age[i] < 18){
    minor++
   }else{
    adult++
   }
  
   
}
console.log(minor)
console.log(adult)
//5//
// 5. High‑Spending Transactions
// Given an array of amounts , 
// find and collect all amounts above a 
// certain threshold (e.g. N1000) into a new array.

let transactions = [500, 1000, 100, 200, 1500]

let threshold = 1000;
let difftransactions = [];

for (let i = 0; i < transactions.length; i++){
    if(transactions[i] > threshold){
    difftransactions.push(transactions[i])

    }
    else{
        continue
    }
}
    console.log(difftransactions)
