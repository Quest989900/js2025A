// let num1 = 7
// let num2 = 5

// let add = num1 + num2

// console.log(add)


function sum(num1,num2){
    let add = num1 + num2
    return add
}

// console.log(sum(7,5,6,2,7))
// console.log(sum(17,15, 5, 3))

function greet(name){
    return "Hello, my dear " + name
}

// console.log(greet('salami'))
// console.log(greet('firdaus'))
// console.log(greet('special dev'))

function introduce(name, country,occupation ) {
    let article
    if(occupation.startsWith('a') || occupation.startsWith('e') 
    || occupation.startsWith('i') || occupation.startsWith('o')
    || occupation.startsWith('u')) {
        article = 'an'
    }else {
        article = 'a'
    }
//TEMPLATE STRING LITERAL
return `Hi! My name is ${name}. I am from ${country}. I am ${article} ${occupation}.`
 
}

// console.log(introduce("sa'eed", 'Nigeria', 'engineer'))
// console.log(introduce("sa'eed", 'Nigeria', 'pilot'))

function census(user, boy, girl) {

    //Output: Mr. user has boy+girl child(ren)
    // e.g: Mr. Falaji has 7 children ; Mr. Emma has 1 child.
}


const multiply = function(a,b){
    let product = a*b
    return product
}

// console.log(multiply(6,3))
// console.log(multiply(45,13))

//ARROW FUNCTION SYNTAX
const divide = (x,y)=>{
    return x/y 
}

// console.log(divide(100, 16))
// console.log(divide(10, 5))

function sumOfMany(num1,num2, ...rest){
    let add = num1 + num2
    for(let i = 0; i < rest.length; i++) {
        // add = add+rest[i]
        add+=rest[i]
    }    
    return add
}

// console.log(sumOfMany(17,15,5,5,10,5,20,10))

const subtract = function(a,b){
    return a-b
}
// console.log(subtract(7,4))

const calculate = (num1, num2, op)=> {
    if(op == 'add') {
        return sum(num1,num2)
    }else if(op=="subtract") {
        return subtract(num1,num2)
    } else if (op == 'multiply') {
        return multiply(num1,num2)
    }else if(op == 'divide') {
        return divide(num1,num2)
    } else {
        return `we can't do that!`
    }
}

console.log(calculate(7, 21, 'add'))
console.log(calculate(7, 21, 'multiply'))
console.log(calculate(7, 21, 'divide'))
console.log(calculate(7, 21, 'subtract'))
console.log(calculate(7, 21, 'exponent'))

// function sumOfSeries(num) {
    
// }



// function sum(num1,num2){
//     let add2 = num1+num2
//     return add2
// }

    
    
const sums = function (num1, num2) {
    let add = num1 + num2
    return add
}
 console.log(sums(100, 40))







const hail = (man)=> `Haffa ${man}`
console.log(hail('salami'))



function math(num1,num2){
    let total =(num1 * num2)
    return total
}
console.log(math(10, 10))

function sub(num1,num2,...rest){
    let diff= num1-num2
    for(let i =0; i<rest.length; i++){
        // diff = diff-rest[i]
        diff-=rest[i]
    }

    return diff
}
// console.log(sub(10,2,8,5))
// console.log(sub(10,12,83,5))








