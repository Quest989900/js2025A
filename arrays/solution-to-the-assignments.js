let monthlyExpenses = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
let total = 0;
for (i = 0; i < monthlyExpenses.length; i++) {
  total += monthlyExpenses[i];
}
let average = total / monthlyExpenses.length;
console.log(`Total: ${total}, Average: ${average}`);

let temperatures = [5, 10, 15, 20, 25, 30, 35, 40];
let highest = temperatures[0];
let lowest = temperatures[0];
for (i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > highest) highest = temperatures[i];
  if (temperatures[i] < lowest) lowest = temperatures[i];
}
console.log(`Highest: ${highest}°C, Lowest: ${lowest}°C`);

let prices = [1000, 2000, 3000, 4000, 5000];
let discountRate = 10;
let discountedPrices = [];
for (let i = 0; i < prices.length; i++) {
  let discount = prices[i] * (discountRate / 100);
  let discountedPrice = prices[i] - discount;
  discountedPrices.push(discountedPrice);
}
console.log(`prices: ${prices}, discountedPrices: ${discountedPrices}`);

let ages = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
let minors = 0;
let adults = 0;
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 18) minors++;
  else adults++;
}
console.log(`Minors: ${minors}, Adults: ${adults}`);

let amounts = [300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000];
let threshold = 1000;
let amountAboveThreshold = [];
for (let i = 0; i < amounts.length; i++) {
  if (amounts[i] > threshold) {
    amountAboveThreshold.push(amounts[i]);
  }
}
console.log(`AmountAboveThreshold: ${amountAboveThreshold}`);

let words = ["Zero", "pressure", "you", "feel", "me", "."];
let wordsLength = [];
for (let i = 0; i < words.length; i++) {
  wordsLength.push(words[i].length);
}
console.log(`WordsLength: ${wordsLength}`);

let shoppingLists = ["Dodge", "Benz", "BMW", "Lambo", "Ferrari", "Tesla"];
let targetedItems = "Lambo";
let index = shoppingLists.indexOf(targetedItems);
console.log(`IndexOfTargetedItem: ${index}`);
