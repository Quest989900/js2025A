for(let i = 1; i <=12; i++) {
    // console.log('3 x ', i, ' = ', 3 * i)
}


let str = 'wertyuiop['

let color = ['red', 'blue', 'yellow', 'green', 'purple']

for (let i = 0; i < color.length; i++) {
    // console.log(color[i] + 's')
}

let num1 = [2,5,8,7,3,9]
let resultArr = []
for(let i = 0; i < num1.length; i++) {
    resultArr.push((num1[i] * 2))
}
// console.log(resultArr)
let oddArr = []
let evenArr = []

for(let i = 0; i <= num1.length-1; i++) {
    if(num1[i] % 2 === 0) {
        evenArr.push(num1[i] * 2)
    } else {
        oddArr.push(num1[i] * 2)
    }
}

// console.log(evenArr)
// console.log(oddArr)
/* 
PROBLEM 2
Calculate the sum of all elements in 
the given array */

let num2 = [2,3,5,7,11]

let collector = 0
for(let i = 0; i < num2.length; i++) {
    // collector = collector + num2[i]
    collector+= num2[i]
}

// console.log(collector)

/*
Ex.3
Find the smallest element in the given array
*/

let num3 = [7,11, 0.5,3,5,1,25]
let smallest = num3[0]

for(let i =0; i < num3.length; i++) {
    if(smallest > num3[i]) {
        smallest = num3[i]
    }else {
        smallest = smallest
    }
}

// console.log(smallest)

let num = [10,20,30,40,50]
let biggestNum = num[0]
for(let i = 0; i < num.length; i++){
    if (biggestNum < num[i]){
        biggestNum = num[i]
    }
    else {
        biggestNum = biggestNum
        
        }
}
// console.log(biggestNum)

/*
Ex 4.
Write a program to reverse an array in place
*/
let birds = ['owl', 'eagle', 'sparrow', 'falcon', 'parrot', 'hawk', 'dove']
// dove, eagle, saprrow, falcon, parrot, hawk, owl      i=0
// dove,hawk, spr, fal,parr,eagle, owl           i=1
// dove, hawk,parr, fal, spar, eagle, owl     i =2
// dove, hawk, parr, fal, spar eagle, owl    i =3
for(let i = 0; i < birds.length/2; i++) {
    let first = birds[i]
    let last = birds[birds.length-1-i]
    birds[i] = last
    birds[birds.length-1-i] = first
}
console.log(birds)
// arr.forEach()
// arr.map()
// arr.filter()
// arr.find()
// arr.sort()
// arr.reduce



//slice(startIndx, endIndx) method

let transactions = [2500, 1000, 100, 200, 1500]
// let sliced = transactions.slice(1)
// let sliced = transactions.slice(1, 4)
// let sliced = transactions.slice(1, 7)
let transactionsCopy = transactions.slice()

// console.log(transactions)
// console.log(transactionsCopy)

let transactions2 = [2500, 1000, 100, 200, 1500]
//splice(start, howManyToRemove, items-to-add)
// transactions2.splice(1,1)
// transactions2.splice(1,2)
// transactions2.splice(1,2, 7500, 550)
// transactions2.splice(1,0, 3000)

let spliced = transactions2.toSpliced(1,2)

console.log(transactions2)
console.log(spliced)
 

