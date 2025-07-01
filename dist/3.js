"use strict";
function formatValue(val) {
    return val.toString();
}
// function formatValueUpper(val: string | number) {
//     return val.toUpperCase();
// }
function printLength(val) {
    if (typeof val === "string") {
        console.log(val.length);
    }
    else {
        console.log(val.length); //array length
    }
}
function area(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}
let input = document.getElementById("username");
console.log('input value', input.value);
function greet(name) {
    if (name) {
        return `Hello, ${name}`;
    }
    return "Hello guest";
}
// name: string | undefined
