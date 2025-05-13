// cat: fur,paws,whiskers,legs,/ run,eat,hunt,jump,meow
// fur: color, texture

let laptop = {}
laptop.brand = 'asus'
laptop.size = '14-inches'
laptop.color = 'silver'
laptop.ram = 16
laptop.canPlayVideos = true
laptop.print = ()=> console.log("Whateveeeeeeeeeer!")

let boy = {
    name: 'adebayo',
    height: '4.4ft',
    age: 18,
    smile: ()=> console.log('😂😊😊😊🤣')    
}

// console.log(laptop)
// console.log(boy)
boy.dob = '12/05/2017'
//  console.log(laptop.print())
// console.log(boy.smile())
console.log(boy)
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
    sound: ()=> console.log('meeeow!'),
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
console.log(student.courses[1].backend[1][1].cloudServers[1])
