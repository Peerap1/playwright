// node tests/demo_js/second.js

function sayHello (){
    console.log("คำนวณ")
}
sayHello()

function toCelsius(){
    let fahrenheit = Math.floor(Math.random() * 200)
    console.log(fahrenheit)
    let value = (fahrenheit - 32) * 5 / 9
    console.log(value.toFixed(2))
}
toCelsius()

// return
function toCelsius2(fahrenheit){
    let value = (fahrenheit - 32) * 5 / 9
    return (value.toFixed(2))
}
console.log(toCelsius2(200))

// Send agument
function seyHello(username){
    return "My name is " + username
    
}
let names = 'OLe Peerapol'
console.log(seyHello(names))