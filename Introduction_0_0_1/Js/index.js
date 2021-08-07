import {add,server,Cup} from "./day2.js"

var element = document.getElementById("main")
var screenContent = []
const log = content => screenContent.push(`<span> >- ${content}</span><br>`)
const logTitle = content => screenContent.push(`<h2>${content}</h2>`)

logTitle("Objects")
var person = {
    name: "Arthur Nindaba",
    Age: 21,
    Address:{
        street: "Nowoursynowska 161",
        city: "Ursynow",
        postal: "02-787"
    },
    phone:[598373836,687674534]
}

log(JSON.stringify(person))
log(person.phone)
person.phone.forEach((num,index) => log(`index: ${index} num: ${num}`))
logTitle("Day Three")
logTitle("Promise:")
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("Success"),1500)
    setTimeout(()=>reject("Fail"),1000)
})

logTitle("Generators")

const listOfItemsGenerator = function* items(){
    yield 1
    yield "safi"
    return "done"
}
const listOfItems = listOfItemsGenerator();
log(listOfItems.next().value)
log(listOfItems.next().value)
log(listOfItems.next().value)
log(listOfItems.next().value)
log(listOfItems.next().value)

promise.then(response=> log("response")).catch(error=> console.log(error))

const listOfNumbersGenerator = function* numbers(arrayNumbers){
    for(var item of arrayNumbers){
        yield item
    }
    // arrayNumbers.forEach(number=> yield number)
}

const listOfNumbers = listOfNumbersGenerator([1,2,3,4,42,23,2321,2332,1,3,3,44])

const displayListOfNumbersAtInterval = setInterval(() => {
        const next = listOfNumbers.next()
        if(next.done){
            log("End of Numbers")
            clearInterval(displayListOfNumbersAtInterval)
        }else{
            log(next.value)
        }
}, 500)

const randomUsers =relusts => {
    let users = ["user1"]
    fetch(`https://randomuser.me/api/?results=${relusts}`)
    .then(res=> res.json().then(re=>users.push(JSON.stringify(re))))
    // .then(element.innerHTML = screenContent.reduce((contentx,contenty) => contentx + contenty))
    // .then((data)=>{ users.push(data)})
    .catch(err=> console.log(erro));
    setTimeout(()=>{
        log(users)
        console.log(users)
        element.innerHTML = screenContent.reduce((contentx,contenty) => contentx + contenty)
    }, 4000)
}
randomUsers(10)
































// console.log(users)
// logTitle("Day Two")
// log(add(1,99))
// log(server)

// logTitle("Concatenation")

// const firstnames =[]
// const secondnames =[]
// firstnames.push('A','B','C','C','D')
// secondnames.push('X','Y','W','Z','X')
// const names = [...firstnames,...secondnames]
// names.forEach(name=> log(name))

// logTitle("THIS")

// const person1 = {
//     names: "Shok Abdi",
//     cars: ["Hundai","Audi"],
//     toString(){
//         log(`name: ${this.names} cars ${this.cars}`)
//     }
// }
// person1.names = "Nindaba Arthur"
// person1.toString()


// const User = (name,email,password,role)=>{
//     return{
//         name,
//         email,
//         password,
//         role,
//         created: Date.now()
//     }
// }

// let user = User("A","A@yad.com","uye73267","Admin")
// user.name="mutama"
// log(JSON.stringify(user))

// logTitle("Declare From Object and Arrays")

// var {name} = user
// name = "Second Mutama"
// log(name)
// log(JSON.stringify(user))
// let [,,third] = secondnames
// log(third)
// logTitle("OOP")
// let cup = new Cup("red","200 ml","celamic","Tea Cup")
// cup.color = "blue"
// log(cup.toString())
















// element.innerHTML = screenContent.reduce((contentx,contenty) => contentx + contenty)


