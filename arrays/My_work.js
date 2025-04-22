//1//
// Array of smaller monthly expense amounts
let monthlyExpenses = [20, 35, 15, 10, 25];

// Variables to store total and average
let total = 0;
let average = 0;


for (let i = 0; i < monthlyExpenses.length; i++) {
    total += monthlyExpenses[i];
}

// To  Calculate the average
average = total / monthlyExpenses.length;

console.log("Total Monthly Expenses: " + total);
console.log("Average Monthly Expense: " + average);

//2//

let temperatures = [22, 18, 25, 30, 17, 21, 28];


let minTemp = temperatures[0];
let maxTemp = temperatures[0];

// I then Loop through the array just one time 
for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] < minTemp) {
        minTemp = temperatures[i];
    }
    if (temperatures[i] > maxTemp) {
        maxTemp = temperatures[i];
    }
}


console.log("Lowest Temperature: " + minTemp );
console.log("Highest Temperature: " + maxTemp );
  
//3//

let originalPrices = [100, 50, 75, 200, 30];

// Discount rate (e.g 10%)
let discountRate = 0.10;


let discountedPrices = [];

// We are going to loop through the original prices and calculate the  discounted prices
for (let i = 0; i < originalPrices.length; i++) {
    let discounted = originalPrices[i] - (originalPrices[i] * discountRate);
    discountedPrices.push(discounted);
}

console.log("Original Prices: ", originalPrices);
console.log("Discounted Prices: ", discountedPrices);

//4//

let ages = [12, 25, 17, 30, 16, 19, 14, 22];


let minors = 0;
let adults = 0;

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        minors++;
    } else {
        adults++;
    }
}

console.log("Number of Minors: " + minors);
console.log("Number of Adults: " + adults);

//5//


let transactions = [500, 1500, 800, 2200, 400, 1800, 300];


let threshold = 1000;
let highSpenders = [];


for (let i = 0; i < transactions.length; i++) {
    if (transactions[i] > threshold) {
        highSpenders.push(transactions[i]);
    }
}


console.log("All Transactions: ", transactions);
console.log("High-Spending Transactions: ", highSpenders);


//7//
shoppingList = ["milk", "bread", "eggs", "butter"]
targetItem = "eggs"
index = -1

for (i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] === targetItem && index === -1) {
    index = i
  }
}

console.log(index) 


//9//
const attendees = ["Alice", "Bob", "Alice", "Charlie", "Bob", "David"];
const diffAttendees = [];

for (let i = 0; i < attendees.length; i++) {
  if (diffAttendeesAttendees.indexOf(attendees[i]) === -1) {
    diffAttendeesAttendees.push(attendees[i]);
  }
}

console.log(diffAttendees);

//10//
let sentence = "Abdulsalam gets launch for everyone.";
let words = sentence.split(" ");
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < words.length; i++) {
  let firstChar = words[i][0];
  if (vowels.indexOf(firstChar) !== -1) {
    count++;
  }
}

console.log("Words starting with a vowel:", count);