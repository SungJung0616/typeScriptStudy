// index.ts

let lastName : string = 'Jung';

lastName = "Kim";

let firstName : string[]= ['sung' , 'Yuna'];
firstName = ['jae', 'hyun'];

const message: string = "Hello, TypeScript!";
console.log(message);
console.log(firstName);

// object type 지정하는 방법
let objectContent :{name? :string} = {}; 
objectContent.name = 'Yuna Kim';

//Union type
let unionType : string | number = 123; // string[] | number 등 다양하게 지정할수있음.

//Customize type (Type Alias)
type status = string[] | number;
let student : status = ['Yuna Kim'];

// Set the type of function parameters and return type
function multi(x: number): number {
    return x * 2;
}

function add(a: number, b: number): number {
    return a + b;
}

// Concatenate two strings and return the result
function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}

// Return the length of a string
function getLength(str: string): number {
    return str.length;
}

function logMessage(message: string, prefix?: string): void {
    console.log(prefix ? `${prefix}: ${message}` : message);
}

// // Define a tuple type 
type Person = [string, number, boolean];
let alice: Person = ['Alice', 25, true];
let bob: Person = ['Bob', 30, false];

// Access and change tuple elements
let age: number = alice[1];
let aliceStatus: boolean = alice[2];


//Update values (similar concept to pointer)
alice[1] = 26;  
alice[2] = false; 

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const firstNameElement = document.getElementById('firstName');
    const objectElement = document.getElementById('objectName')
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

    if (objectElement){
        objectElement.textContent = objectContent.name??"No Name";
    }

    if (resultsElement) {
        resultsElement.innerHTML = `
          <p>multi(5): ${result1}</p>
          <p>add(10, 20): ${result2}</p>
          <p>concatenate('Hello', ' World'): ${result3}</p>
          <p>getLength('TypeScript'): ${length}</p>
        `;
      }

      if(tupleElement){
        tupleElement.innerHTML =`
         <p>Alice's original age: ${age}</p>
         <p>Alice's original status: ${aliceStatus}</p>
         <p>Alice's updated age: ${alice[1]}</p>
         <p>Alice's updated status: ${alice[2]}</p>
        `
      }
  });