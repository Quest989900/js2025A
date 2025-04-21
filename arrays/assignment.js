// 1. Monthly Budget Calculator
// Given an array of your monthly expense amounts, 
// use a loop to compute the total expense and then 
// calculate the average.

let monthlyExpenses = [1200, 1500, 1100, 1300, 1000, 1450, 1600, 1550, 1400, 1700, 1250, 1350];
let totalExpense = 0;

 
for (let i = 0; i < monthlyExpenses.length; i++) {
    totalExpense += monthlyExpenses[i];
}

 
let averageExpense = totalExpense / monthlyExpenses.length;

 
console.log("Total Expense: $" + totalExpense);
console.log("Average Monthly Expense: $" + averageExpense);

// 2.Temperature Analyzer
// With an array of daily temperatures (in °C), 
// find the highest and lowest temperatures by 
// iterating once through the array.

const temperatures = [23, 17, 30, 15, 28, 33, 19];

let highest = temperatures[0];
let lowest = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > highest) {
        highest = temperatures[i];
    } else if (temperatures[i] < lowest) {
        lowest = temperatures[i];
    }
}

console.log("Highest temperature:", highest + "°C");
console.log("Lowest temperature:", lowest + "°C");


// 3. Discounted Prices Generator
// Given an array of product prices and a fixed 
// discount rate (e.g. 10%), loop through the prices 
// to build a new array of discounted prices.

const productPrices = [120, 30, 40, 10, 25, 75, 90, 66, 80]
const discountedRate = 0.10
let discountedPrice = []
for(let i =0; i < productPrices.length; i++){
let discounted = productPrices[i] - (productPrices[i] * discountedRate)
discountedPrice.push(discounted)
console.log("original productPrices" , productPrices )
console.log("Discounted Price" , discountedPrice)

// 4. Counting Age Groups
// From an array of people’s ages, count how many 
// are minors (under 18) and how many are adults 
// (18 and over).

let peoplesAge = [3, 12, 20, 15, 30, 45, 25, 23,19, 9, 18]
let under18 = 0
let over18 = 0
for (let i = 0; i < peoplesAge.length; i++){
    if(peoplesAge[i] >= 18 ){
over18++
    }
    else{
        under18++
    }
}
console.log ("over 18 are" , over18)
console.log ("under 18 are" , under18)

}

// 5. High‑Spending Transactions
// Given an array of amounts , 
// find and collect all amounts above a 
// certain threshold (e.g. N1000) into a new array.

let amounts = [100, 500, 700, 1000, 2000, 3500, 1900]
let threshold = 1000
let highSpending = []
for (let i = 0; i < amounts.length; i++){
    if(amounts[i] > threshold){
        highSpending.push(amounts[i])
    }
}
console.log("high spending transactions are:", highSpending)

// 6. Word Length Mapper
// Starting with an array of words, build a parallel 
// array of the corresponding word lengths.

let words = ['mango' ,'apples', 'bananas', 'milk', 'strawberry']
let wordLength = []
for (let i = 0; i < words.length; i++){
    wordLength.push(words[i].length)
}
console.log('wordlength' , wordLength)
console.log('words' , words)

// 7 Find an Item’s Index
// Given your shopping list array and a target item, 
// loop to locate its index (or return –1 if not found).

let shoppingList = ['milk', 'milo', 'apples', 'chocolate', 'noodle', 'pasta', 'rice']
let targetedItem = 'okro'
for(let i = 0; i < shoppingList.length; i++){
    if(shoppingList[i] === targetedItem){
    }
}
console.log('the index of targeted items is' , shoppingList.indexOf(targetedItem) )


// 8. Reverse an Array In‑Place
// Without using the built‑in method, swap elements 
// in the array via a loop to reverse it manually.

let birds = ['eagle', 'parrot', 'owl', 'falcon', 'vulture']
for(let i = 0; i < birds.length/2; i++){
    let first = birds[i]
    let last = birds[birds.length-1-i]
    birds[i] = last
    birds[birds.length-1-i] = first
    console.log(birds)
}

// 9. Duplicate Removal
// From an array that may contain duplicate entries 
// (e.g. attendee names), build a new array of 
// uniques by checking with a loop and using indexOf 
// to avoid repeats.




// 10. Word‑Counting in a Sentence
// Split a sentence into words (using String.split), 
// then loop through the resulting array to count 
// how many words start with a vowel.
