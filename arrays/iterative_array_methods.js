//forEach()

let arr = ['mgr', 'boss', 'class-gov']
// for(let i = 0; i <arr.length; i++) {
//     // console.log(arr[i].padStart('ex-'))
//     console.log('ex-'+ arr[i])
// }

arr.forEach( function (element, index, array){
    // console.log('ex-' + element)
} )

let birds = ['owl', 'eagle', 'sparrow', 'falcon', 'parrot', 'hawk', 'dove']

birds.forEach( function(el,i, arr){  //el == birds[i]
    let first = el
    let last = arr[arr.length-1-i]
    el = last
    arr[arr.length-1-i] = first
} )

// console.log(birds)

let num = [10,210,30,40,50]
let biggestNum = num[0]
num.forEach( (el, i, arr)=> {
    if (biggestNum < el){
        biggestNum = el
    }
    else {
        biggestNum = biggestNum
        
        }
} )
 
// console.log(biggestNum)

/*
PROBLEM 2
Calculate the sum of all elements in 
the given array using forEach method*/


let arr1 = [23,45,67,12,11]
const myFunc = function(el,i,arr) {
    accumulator+=el
}
let accumulator = 0
arr1.forEach(myFunc )

// console.log(accumulator)

/*
Write a function that returns an array that contains double of each 
element of any given array. Use the forEach() method.
eg: arr1 = [2,4,5,7]  
resArr = [4,8,10,14]
*/

const double = function(arr) {
    let resArr = []
    arr.forEach( function(el,i,arr){
        resArr.push(el * 2)
    } )

    return resArr
}

// console.log(double([3,5,2,8,4]))
// console.log(double([13,4,21]))
// console.log(double([32,8,40]))


let arr2 = [1,8,4, 6, 12, 199]
//let arr2 = [1,4,6, 8, 7, 12]
let arr3 = ['aba', 'dayo','aJah', 'abu', 'mama', 'bayo']
//let arr2 = ['1','8','4', '6','2', '199']
let compareFunc = function(x,y) {
    return x-y
}

arr2.sort()
// arr2.sort((a,b)=> a-b)
arr2.sort(compareFunc)
// arr2.sort((a,b)=> b-a)  descending order

// console.log(arr2)


/*
1.Write a function that takes an array and a number and flattens 
the array to the level of the number given.

2. Write a function that takes array and a sort order. The 
function sorts the array in the prefered order.

*/
const arrFlattener = function(arr,level=1){
    return arr.flat(level)
}

// console.log(arrFlattener([2,1,3,[7,5,[2,1,3]]],1))

const sorter = (arr, order='asc')=>{
        if(order == 'asc'){
            return arr.sort((a,b)=> a-b)
        }else if(order == 'desc') {
            return arr.sort((a,b)=> b-a)
        }
        else{
            return `We do not support that sorting order`
        }

}

// console.log(sorter([2,5,1,7,32]))

// REDUCE( function, initialValue )

let arr4 = [5,7,9]

let reducedValue = arr4.reduce( (accum, cv, currIndx, arr)=>{
     return accum * cv
    //  return accumulator
}, 1)

// console.log(reducedValue)

/*
Given an array containing the 30 days in a month. 
Write a code to add up the first ten days of the month, using
the reduce array method.
*/

let month = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30
]

let reducedMonth = month.reduce((acc, cv, ci, arr)=>{
    if(ci <= 9) {
        return acc + cv
    }else{
        return acc + 0
    }
},0)

// console.log(reducedMonth)

let reducedMonth_ = month.reduce((acc, cv,ci,arr)=>{
    return arr.slice(0,10).reduce((acc,cv,ci,arr)=> acc + cv)
})

// console.log(reducedMonth_)







let _reducedMonth = month.slice(0,10).reduce((acc,cv,ci,arr)=> acc + cv)

// console.log(_reducedMonth)


/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

 
 Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

const sumToTarget = (arr, target)=>{
    let resArr = []
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if((arr[i] + arr[j] === target) && j > i) {
                resArr.push(i,j)
            }else {
                continue
            }
        }
    }
    return resArr
}

// console.log(sumToTarget([2,7,11,15], 9))
// console.log(sumToTarget([3,2,4], 6))
// console.log(sumToTarget([3,3], 6))
// /*


// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, 
// with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k 
// (hence they are underscores).
// */ 
// Given an integer array, nums and an integer val, 
// remove all occurrences of val in nums, in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which 
// are not equal to val.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, 
// with the first two elements of nums being 2.
// It does not matter what you leave beyond the 
// returned k (hence they are underscores).

const nums = [2, 8, 10, 2, 20, 2];
const removeDup = function (arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      arr[i] = "_";
    } else {
      count++;
      continue;
    }
  }
  arr.sort();
  return {0:2, num: arr}
  

};
// console.log(removeDup([0,1,2,2,3,0,4,2], 2));

/*
Problem 3:
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/
   
const indexFunc = function(arr, tar){
    if(arr.includes(tar)){
        return arr.indexOf(tar)
    }else {
        arr.push(tar)
        arr.sort((a,b) => a-b)
    } 
        return arr.indexOf(tar)
    
    
}
// console.log(indexFunc([1,3,5,6],5))
// console.log(indexFunc([1,3,5,6],2))
// console.log(indexFunc([1,3,5,6],7))

const merge = function(num1,m,num2,n){
    for(let i=0; i < (m+n); i++) {
        if (num1[i] == 0) {
            num1.pop()
            i--
         }      

    }
    console.log(num1)
    return num1.concat(num2).sort()
}

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
// console.log(merge([1],1,[],0))
// console.log(merge([],0,[1],1))



let num2 = [2,5,7]
let count = 0

// const addOne = function (sum){
//     for(let i = sum.length - 1; i >= 0; i--) {
//         sum[i] = 
//     }
// } 

function plusOne (array) {
    let resArr = []
    let solution =+ array.join('') + 1
    resArr.push(solution)
    return resArr.toString().split('')
}
// console.log(plusOne([1,2,3]))
// console.log(plusOne([19]))

const addOne = (arry) => (Number(arry.join(""))+1).toString().split("")

    // console.log(addOne([0]))


const sumOne = (arry) => (Number(arry.join(""))+1).toString().split("").map(digit => Number(digit))

// console.log(sumOne([9,9,9]))

const process = function(arr1, m, arr2,n){
    for(let i = arr1.length -1; i>= 0; i--){
        if(!arr1[i]){
            arr1[i] = arr2[i-m]
        }
    }
    arr1.sort()
    return arr1
}
// console.log(process([1,2,3,4,5,6,0,0,0], 6, [2,5,6],3 ));
// console.log(process([1], 1, [], 0 ));
// console.log(process([0], 0, [1],1 ));

let prices = [1,42,3]
let prices_ = prices.sort()
console.log(prices);
console.log(prices_);

if(5 < undefined){
    console.log('yes!');
    
}else{
    console.log('no!');
    
}
//=====================================
let counter = 0
    for(let i = 0; i < prices.length-1; i++){
        if(prices[i] > prices[i+1] && prices[prices.length-1] < prices[prices.length-2]){
            count++            
        }
    }
    if (count == prices.length){
        return 0
    }

    let profit = 0
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i]
            }
        }
        
    }

    return profit