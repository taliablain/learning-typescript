function formatValue(val: string | number) {
    return val.toString();
}


// function formatValueUpper(val: string | number) {
//     return val.toUpperCase();
// }


function printLength(val: string | string[]) {
    if (typeof val === "string") {
        console.log(val.length);
    } else {
        console.log(val.length); //array length
    }
}


type Circle = { kind: "circle"; radius: number};
type Square = { kind: "square"; side: number};
type Shape = Circle | Square;

function area(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}


let input = document.getElementById("username") as HTMLInputElement;
console.log('input value', input.value)




function greet(name?: string) {
    if (name) {
        return `Hello, ${name}`;
    }
    return "Hello guest";
}


// name: string | undefined


