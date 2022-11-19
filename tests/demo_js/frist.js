// node tests/demo_js/frist.js

function sum(a, b) {
    return a + b;
}
console.log("" + sum(3, 4));

var age = 30
console.log(typeof age);

console.log(1 != 2)

var random_number = Math.floor(Math.random() * 10)
console.log(random_number)

var lotto_number = 1

// if else
if (lotto_number == random_number) {
    console.log("ยินดีด้วยคุณถูกรางวัล เลขท้าย 1 ตัว");
}
else {
    console.log("เสียใจด้วยน้าาาาาา คุณไม่ถูกรางวัล")
}

// if else if
if (random_number >= 5) {
    console.log("ประถม 1");
}
else if (random_number < 5) {
    console.log("อนุบาล 3")
}

// for
for (var i = 1; i < 5; i++) {
    console.log("ประถม " + i)
}
