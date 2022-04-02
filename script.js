let num = +prompt("Введите простое число")
let i
let count

simpleNumber : for (i = 2; i <= num; i++) {
    for (count = 2; count < num; count++) {
        if (i % count === 0) {
            continue simpleNumber;
        }
    }
}

if (count === num || num === 1) {
    console.log("Число простое")
} else {
    console.log("Число не простое")
}