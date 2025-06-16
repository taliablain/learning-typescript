const barcodeOne: string = 'ABCD';
const uppercasedBarcodeOne = barcodeOne.toUpperCase();

const barcodeTwo: number = 1;
const uppercasedBarcodeTwo = barcodeTwo.toUpperCase();

function printProduct(product: { id: number; title: string; price: number }) {
    console.log(product.title);
}

printProduct({ id: 1, title: "Mouse" });

let age: number = 25;
let names: string = "Talia";
let isAdmin: boolean = false;

function greetTs(name: string): string {
    return `Hello ${name}`;
}

greet("Talia");
greet(42);

function add(a: number, b: number): number {
    return a + b;
}

let city = "Paris"; //inferred as string 


let data: any = "something";
data = 42; //allowed


function log(message: string): void {
    console.log(message);
}


//difference between greet in ts and js 