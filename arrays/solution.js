// QUESTION 1.
let expenses = [1000, 5000, 20000, 50000]
let totalExpenses = 0
for(i = 0; i < expenses.length; i++){
    totalExpenses += expenses
}
let averageExpenses = totalExpenses / expenses.length
console.log(totalExpenses)
console.log(averageExpenses)

// QYAETION 2.
let temperature = [20, 25, 10, 22, 30, 35, 32]
let highestTemp = [0]
let lowestTemp =[0]
for (i = 0; i < temperature.length; i++){
if (temperature[i] = highestTemp) {
    highestTemp = temperature[i]
    }

    if (temperature[i] = lowestTemp){
        lowestTemp = temperature[i]
    }
}
console.log(highestTemp)
console.log(lowestTemp)


// QUESTION 3.
let prices = [1000, 2000, 3000, 4000, 5000];
let discountRate = 0.10; // 10% discount

let discountedPrices = [];

for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discountRate);
    discountedPrices.push(discountedPrice.toFixed(2));
}


// QUESTION 4.
let ages = [15, 22, 18, 12, 25, 30, 17, 20]

let minors = 0
let adults = 0

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        minors++
    } else {
        adults++
    }
}

console.log(minors)
console.log(adults)

// QUESTION 5.
let amounts = [500, 1200, 800, 1500, 200, 3000, 900]

let threshold = 1000
let highSpendingTransactions = []

for (let i = 0; i < amounts.length; i++) {
    if (amounts[i] > threshold) {
        highSpendingTransactions.push(amounts[i])
    }
}

console.log( highSpendingTransactions)


// QUESTION 6.
let word = ["apple", "banana", "cherry", "date", "elderberry"]

let wordLengths = []

for (let i = 0; i < word.length; i++) {
    wordLengths.push(word[i].length)
}

console.log(word)
console.log(wordLengths)


// QUESTION 7.
let shoppingList = ["milk", "eggs", "bread", "apples", "chicken"]

let targetItem = "bread"
let index = -1

for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i] === targetItem) {
        index = i
        break
    }
}

console.log("${targetItem}")

// QUESTION 8.
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
}

console.log(array)

// question 9.
let attendees = ["John", "Mary", "John", "David", "Mary", "Jane"]

let uniqueAttendees = []

for (let i = 0; i < attendees.length; i++) {
    if (uniqueAttendees.indexOf(attendees[i]) === -1) {
        uniqueAttendees.push(attendees[i])
    }
}

console.log("Unique attendees: ", uniqueAttendees)


// QUESTION 10.
let sentence = "The quick brown fox jumps over the amazing elephant"

let words = sentence.toLowerCase().split(" ")
let vowelCount = 0

for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i].charAt(0)
    if (["a", "e", "i", "o", "u"].includes(firstLetter)) {
        vowelCount++
    }
}

console.log(vowelCount)
