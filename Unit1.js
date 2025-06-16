"use strict";
const barcodeOne = 'ABCD';
const uppercasedBarcodeOne = barcodeOne.toUpperCase();
const barcodeTwo = 1;
const uppercasedBarcodeTwo = barcodeTwo.toUpperCase();
function printProduct(product) {
    console.log(product.title);
}
printProduct({ id: 1, title: "Mouse" });
let age = 25;
let names = "Talia";
let isAdmin = false;
function greetTs(name) {
    return `Hello ${name}`;
}
greetTs("Talia");
greetTs(42);
function add(a, b) {
    return a + b;
}
let city = "Paris"; //inferred as string 
let data = "something";
data = 42; //allowed
function log(message) {
    console.log(message);
}
//difference between greet in ts and js 
