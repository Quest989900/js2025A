/*
1. Monthly Budget Calculator: Given an array of your monthly expense amounts, use a loop to compute the total expense and then calculate the average.
*/
const expenses = [200, 400, 700, 20, 190, 2000];
let sum = 0;
let average;
for (let i = 0; i < expenses.length; i++) {
  sum += expenses[i];
  average = sum / expenses.length;
}
console.log(average);

// 2.Temperature Analyzer: With an array of daily temperatures (in °C), find the highest and lowest temperatures by iterating once through the array.
let temps = ["7°C", "20°C", "-7°C", "30°C", "52°C"];
let smallest = temps[0];
let biggest = temps[0];

for (let i = 0; i < temps.length; i++) {
  if (parseInt(smallest) > parseInt(temps[i])) {
    smallest = temps[i];
  }
  if (parseInt(biggest) < parseInt(temps[i])) {
    biggest = temps[i];
  }
}
console.log(smallest, biggest);

// 3. Discounted Prices Generator: Given an array of product prices and a fixed discount rate (e.g. 10%), loop through the prices to build a new array of discounted prices.
const prices = [200, 400, 700, 20, 190, 2000];
let discountedPrices = [];
for (let i = 0; i < prices.length; i++) {
  discountedPrices.push(prices[i] + prices[i] * 0.1);
}
console.log(discountedPrices);

// 4. Counting Age Groups: From an array of people’s ages, count how many are minors (under 18) and how many are adults (18 and over).
const ages = [20, 40, 10, 15, 2, 18, 100, 2, 25, 34];
let minors = 0;
let adults = 0;
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adults++;
  } else {
    minors++;
  }
}
console.log("We have " + minors + " minors and " + adults + " adults.");

// 5. High‑Spending Transactions:Given an array of amounts, find and collect all amounts above a certain threshold (e.g. N1000) into a new array.
const prices2 = [200, 400, 700, 20, 190, 2000];
let overSpent = [];
for (let i = 0; i < prices.length; i++) {
  if (prices2[i] > 500) {
    overSpent.push(prices2[i]);
  }
}
console.log(overSpent);

// 6. Word Length Mapper: Starting with an array of words, build a parallel array of the corresponding word lengths.
const words = ["hello", "hi", "my", "name", "is", "Makhtum"];
let lengthofWords = [];
for (let i = 0; i < words.length; i++) {
  lengthofWords.push(words[i].length);
}
console.log(lengthofWords);

// 7 Find an Item’s Index : Given your shopping list array and a target item, loop to locate its index (or return –1 if not found).
const list = ["Snacks", "Food", "Drinks", "MacBook", "Cream", "Lambo"];
let targetItem = "macbok";
let targetItemIndex = -1;

for (let i = 0; i < list.length; i++) {
  if (
    targetItem.toLowerCase() === list[i].toLowerCase() &&
    targetItemIndex === -1
  ) {
    targetItemIndex = i;
  }
}
console.log(targetItemIndex);

// 8. Reverse an Array In‑Place: Without using the built‑in method, swap elements in the array via a loop to reverse it manually.
const list2 = ["Snacks", "Food", "Drinks", "MacBook", "Cream", "Lambo"];
for (let i = 0; i < list2.length / 2; i++) {
  let first = list2[i];
  let last = list2[list2.length - 1 - i];
  list2[i] = last;
  list2[list2.length - 1 - i] = first;
}
console.log(list2);

// 9. Duplicate Removal: From an array that may contain duplicate entries (e.g. attendee names), build a new array of uniques by checking witha loop and using indexOf to avoid repeats.

const names = [
  "Fuad",
  "Faisal",
  "Fareed",
  "Furqan",
  "Farhan",
  "faRhan",
  "FURQAN",
];
let uniqueNames = [];
for (let i = 0; i < names.length; i++) {
  let currentName = names[i].toLowerCase();
  if (uniqueNames.indexOf(currentName) === -1) {
    uniqueNames.push(currentName);
  }
}
console.log(uniqueNames);

// 10. Word‑Counting in a Sentence: Split a sentence into words (using String.split), then loop through the resulting array to count how many words start with a vowel.
let sentence = "This is a sentence and i am gonna loop through it".split(" ");
let vowelCount = 0;
for (let i = 0; i < sentence.length; i++) {
  let currWord = sentence[i];

  if ("aeiouAEIOU".includes(currWord[0])) {
    vowelCount++;
  }
}
console.log(vowelCount);
