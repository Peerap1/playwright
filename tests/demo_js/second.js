// node tests/demo_js/second.js

function sayHello() {
    console.log("คำนวณ")
}
sayHello()

function toCelsius() {
    let fahrenheit = Math.floor(Math.random() * 200)
    console.log(fahrenheit)
    let value = (fahrenheit - 32) * 5 / 9
    console.log(value.toFixed(2))
}
toCelsius()

// return
function toCelsius2(fahrenheit) {
    let value = (fahrenheit - 32) * 5 / 9
    return (value.toFixed(2))
}
console.log(toCelsius2(200))

// Send agument
function seyHello(username) {
    return "My name is " + username

}
let names = 'OLe Peerapol'
console.log(seyHello(names))

// Sec 2
var myCar = {
    brand: "Honda",
    model: "City",
    cloor: "Black",
    fullName: function () {
        return this.brand + " " + this.model
    }
};
console.log(myCar.fullName());

// // log index in list
// for (var x in myCar) {
//     console.log(myCar[x])
// };

// var cars = ["Honda", "City", "Black"]
// for (var y of cars) {
//     console.log(y)
// };


var toCelsius10 = () => {
    let fahrenheit = Math.floor(Math.random() * 200)
    console.log(fahrenheit)
    let value = (fahrenheit - 32) * 5 / 9
    console.log(value.toFixed(2))
}
toCelsius10()