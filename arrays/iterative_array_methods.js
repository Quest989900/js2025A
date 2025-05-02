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

let reducedValue = arr4.reduce( (accumulator, currentValue, currentIndx,arr)=>{
     return accumulator * currentValue
    //  return accumulator
}, 1)

console.log(reducedValue)