// cat: fur,paws,whiskers,legs,/ run,eat,hunt,jump,meow
// fur: color, texture

let laptop = {}
laptop.brand = 'asus'
laptop.size = '14-inches'
laptop.color = 'silver'
laptop.ram = 16
laptop.canPlayVideos = true
// laptop.print = ()=> console.log("Whateveeeeeeeeeer!")

let boy = {
    name: 'adebayo',
    height: '4.4ft',
    age: 18,
    // smile: ()=> console.log('😂😊😊😊🤣')    
}

// console.log(laptop)
// console.log(boy)
boy.dob = '12/05/2017'
//  console.log(laptop.print())
// console.log(boy.smile())
// console.log(boy)
let username = boy.name
// console.log(username);

let cat = {
    paws: 4,
    legs: 4,
    fur: {
        color: 'white',
        texture: 'fluffy'
    },
    favoriteFood: ['mice', 'milk', 'fish'],
    // sound: ()=> console.log('meeeow!'),
    canHunt: true
}
// console.log(cat.legs);
// console.log(cat.fur.texture);
// console.log(cat.favoriteFood[1]);

let student = {
    name: {
        surname: "ola",
        firstname: 'ade'
    },
    yearOfAdmisson: 1999,
    courses: [
        {frontend:[{name: 'html', grade: 'good'}, 'css', 'js']},
        {backend:['nodejs', [{ORM: ['sequelize', 'mongoose']},{cloudServers: ['aws', 'azure']}]]},
        {database: [{sql:['mysql','postgres']},{nosql: ['mongo', 'redis']}]}
    ],
    friends: [{name: 'john', f_courses:{frontend:[{name: 'html', grade: 'average'}, 'css', 'js']}},{},{}]
}
//  console.log(student.courses[2].database[0].sql[1])
// console.log(student.friends[0].f_courses.frontend[0].grade);
// console.log(student.courses[0].frontend[0].grade);
// console.log(student.courses[1].backend[1][1].cloudServers[1])


let obj1 = {
    name: 'adepoju',
    class: 'js1',
    age: 23
}

let objKeys = Object.keys(obj1)

// console.log(objKeys);

let objValues = Object.values(obj1)

// console.log(objValues); 

let companyCustomers = [
    {name: 'salam', email: 'sala@xmail.com', age: 34 },
    {name: 'emma', email: 'ima@mail.com', dob: '23/4/2010'},
    {name: 'adam', email: 'adam@mail.com', age: 23},
    {name: 'khalid', phone: '9023456789', age: 24},
    {name: 'faisal', phone: '1234567890', dob: '14/4/2011'}
]

let output = []
companyCustomers.forEach( (el,i,arr)=>{
    let customerKeys = Object.keys(el)
    if(customerKeys.includes('phone')){
        output.push(el)
    }
    return output
})

// console.log(output)

let objEntries = Object.entries(obj1)
// console.log(objEntries[1][0]);

let source = {
    make: 'honda',
    model:'civic',
    year: 2022,
    color: 'silver',
    price: 2345679.89
}

let destination = {condition: 'used', fuelType: 'EV'}

let copy = Object.assign(destination,source)

// console.log(destination)
// console.log(copy)

const keyCounter = (obj)=> {
    return Object.keys(obj).length
}

// console.log(keyCounter(obj1))

let product = {
    name: 'perfume',
    brand: '24K',
    fragrance: 'floral',
    quantity: '15ml',
    seller: 'ethereum'
}

let productCopy = {...product}

let productCopy2 = {shop: 'abc', isForeign: true, ...product}
console.log(productCopy2);

//rest parameter ...
const sum = function(a,b, ...rest){
    return 
}

sum(3,5,7,6,8,3)  // rest = [7,6,8,3]

//spread operator ...
let num1 = [4,3,5]
let num2 = [...num1]
// console.log(num2);

/**
 const cartItem = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  quantity: 2
};

Problem 7:
Given a non-empty array of integers, nums, every element appears twice except for one. 
Find that single one. [2,2,1], [4,1,2,1,2]
 */

const singleNumber = (arr)=>{
    let holder = ''
    for(let i=0; i<arr.length; i++){
        if(holder.includes(arr[i])){            
            holder = holder.replaceAll(String(arr[i]), '')           
            
        }else{
            holder+=String(arr[i])
        }
    }    
    for(let i=0; i<holder.length; i++){
        if(holder.charAt(i) !== '' ){
            return Number(holder.charAt(i))
        }
    }
}

console.log(singleNumber([4,1,2,1,2,3,1,5,5,4,5,1,4]));
// console.log(singleNumber([2,2,1]));
// console.log(singleNumber([1]));
 