"use strict";
function identity(value) {
    return value;
}
identity("hello");
identity(42);
function wrapInArray(value) {
    return [value];
}
const numberArray = wrapInArray(5);
const stringArray = wrapInArray("hello");
function speak(pet) {
    if (pet.kind === "dog") {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
function handleApiResponse(response) {
    if (response.status === "success") {
        console.log("Data received: ", response.data);
    }
    else {
        console.error("Error:", response.message ?? "Unknown error");
    }
}
const response = {
    status: "success",
    data: { id: 1, name: "Talia" }
};
handleApiResponse(response);
