"use strict";
// index.ts
let lastName = 'Jung';
lastName = "Kim";
let firstName = ['sung', 'Yuna'];
firstName = ['jae', 'hyun'];
const message = "Hello, TypeScript!";
console.log(message);
console.log(firstName);
// object type 지정하는 방법
let objectContent = {};
objectContent.name = 'Yuna Kim';
//Union type
let unionType = 123; // string[] | number 등 다양하게 지정할수있음.
let student = ['Yuna Kim'];
// Set the type of function parameters and return type
function multi(x) {
    return x * 2;
}
function add(a, b) {
    return a + b;
}
// Concatenate two strings and return the result
function concatenate(str1, str2) {
    return str1 + str2;
}
// Return the length of a string
function getLength(str) {
    return str.length;
}
function logMessage(message, prefix) {
    console.log(prefix ? `${prefix}: ${message}` : message);
}
let alice = ['Alice', 25, true];
let bob = ['Bob', 30, false];
// 튜플 요소 접근 및 변경
let age = alice[1];
let aliceStatus = alice[2];
alice[1] = 26;
alice[2] = false;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    const messageElement = document.getElementById('message');
    const firstNameElement = document.getElementById('firstName');
    const objectElement = document.getElementById('objectName');
    const resultsElement = document.getElementById('results');
    const tupleElement = document.getElementById('tuple');
    const result1 = multi(5); // 10
    const result2 = add(10, 20); // 30
    const result3 = concatenate('Hello', ' World'); // 'Hello World'
    const length = getLength('TypeScript'); // 10
    if (messageElement) {
        messageElement.textContent = message;
    }
    if (firstNameElement) {
        firstNameElement.textContent = firstName.join(', ');
    }
    if (objectElement) {
        objectElement.textContent = (_a = objectContent.name) !== null && _a !== void 0 ? _a : "No Name";
    }
    if (resultsElement) {
        resultsElement.innerHTML = `
          <p>multi(5): ${result1}</p>
          <p>add(10, 20): ${result2}</p>
          <p>concatenate('Hello', ' World'): ${result3}</p>
          <p>getLength('TypeScript'): ${length}</p>
        `;
    }
    if (tupleElement) {
        tupleElement.innerHTML = `
         <p>Alice's original age: ${age}</p>
         <p>Alice's original status: ${aliceStatus}</p>
         <p>Alice's updated age: ${alice[1]}</p>
         <p>Alice's updated status: ${alice[2]}</p>
        `;
    }
});
