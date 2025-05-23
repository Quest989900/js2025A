
// console.log('aaa')
setTimeout( ()=>{
    // console.log('bbb')
}, 5000 )

// console.log('ccc')

// A programming logic interacts with other 3rd party logic through
// Application Programme Interface (API) 
const getCountry = (country)=>{
    let pop
let fetched = fetch(`https://restcountries.com/v3.1/name/${country}`)
// console.log('fetched:', fetched);
return (fetched.then( (res)=>{
    // console.log(falaji) JavaScript Object Notation JSON
     return res.json()
}).then((data)=>{
    return pop=data[0].population
}).catch(err=>{
    console.log('error:',  err)
})

)}

/* https://restcountries.com/v3.1/name/country
Using the api above, write a function that returns 
the population of any country

*/
console.log(getCountry('togo').then(pop=>console.log(pop)));

// getCountry('togo').then(pop=>{
//     console.log(pop)
// })


// "https://api.coindesk.com/v1/bpi/currentprice1.json"
// 'https://data.fixer.io/api/latest?access_key=d78782b1f9fd8844077ef50d3ae21a38'
// axios

/*
1. js packages / modules
2. alternative stuffs:
  - async-await
  - ternary
  - switch
  - nullish coalescence
  - object seal, freeze, isFrozen. isSealed, create, etc...

  node(js) package manager  npm
*/