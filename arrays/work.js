let expenses = [1200.50, 300.75, 150.20, 400.00, 250.00];

let totalExpenses = 0;

for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

let averageExpense = totalExpenses / expenses.length;

// console.log("Total Monthly Expenses: $" + totalExpenses.toFixed(2));
// console.log("Average Expense: $" + averageExpense.toFixed(2));

let temperatures = [22, 30, 18, 25, 27, 21, 31];
let highest = temperatures[0];
let lowest = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > highest) highest = temperatures[i];
  if (temperatures[i] < lowest) lowest = temperatures[i];
}
// console.log("Highest:", highest + "°C");
// console.log("Lowest:", lowest + "°C");

let prices = [1200, 500, 3000, 750];
let discountRate = 0.1;
let discountedPrices = [];

for (let i = 0; i < prices.length; i++) {
  let discounted = prices[i] - prices[i] * discountRate;
  discountedPrices.push(discounted);
}

// console.log("Discounted Prices:", discountedPrices);

let ages = [15, 22, 17, 18, 30, 12, 19];
let minors = 0;
let adults = 0;

for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 18) {
    minors++;
  } else {
    adults++;
  }
}

// console.log("Minors:", minors);
// console.log("Adults:", adults);

let transactions = [800, 1200, 500, 2000, 150, 1800];
let threshold = 1000;
let highSpenders = [];

for (let i = 0; i < transactions.length; i++) {
  if (transactions[i] > threshold) {
    highSpenders.push(transactions[i]);
  }
}

// console.log("High-Spending Transactions:", highSpenders);

let words = ["apple", "banana", "kiwi", "strawberry"];
let lengths = [];

for (let i = 0; i < words.length; i++) {
  lengths.push(words[i].length);
}

// console.log("Word Lengths:", lengths);

let shoppingList = ["milk", "bread", "eggs", "butter"];
let target = "eggs";
let index = -1;

for (let i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] === target) {
    index = i;
    break;
  }
}

// console.log("Item Index:", index);

let array = [1, 2, 3, 4, 5];
let left = 0;
let right = array.length - 1;

while (left < right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
  left++;
  right--;
}

// console.log("Reversed Array:", array);

let names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
let uniqueNames = [];

for (let i = 0; i < names.length; i++) {
  if (uniqueNames.indexOf(names[i]) === -1) {
    uniqueNames.push(names[i]);
  }
}

// console.log("Unique Names:", uniqueNames);


let sentence = "An owl and an elephant are outside";
let word = sentence.split(" ");
let count = 0;

for (let i = 0; i < words.length; i++) {
  let firstLetter = words[i][0].toLowerCase();
  if ("aeiou".includes(firstLetter)) {
    count++;
  }
}

console.log("Words starting with a vowel:", count);