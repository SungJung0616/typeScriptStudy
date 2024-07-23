// When it's hard to predefine the type for a variable (union type, any, unknown)

let lastName: string | number = 'kim'

lastName = 123;
lastName = 'sung';

// To allow both numbers and strings in an array, use: (number | string)[]
let members: (number | string)[]  = [1, 2, 3, '4']

let object: { a: string | number } = { a: 123 }

// any type = a type shield deactivation syntax
let another: any;

another = 123;
another = [];

// unknown type is similar to any
let other: unknown;
other = 123;
other = {};

let variable1: string = other; // Error occurs, unknown type is convenient for type declaration but prevents type compatibility
let variable2: string = another; // Type shield is deactivated so anything can be assigned. Be cautious

// Arithmetic operations are not possible with unknown type
// TypeScript only allows arithmetic operations with number type
other - 1

// The type is correct, but why can't I add 1?
// TypeScript prefers strictness

let age: string | number;
age + 1; // string type + 1 (allowed)
        // number type + 1 (allowed)
        // string | number type + 1 (not allowed)
        // string | number is a new type itself

let age2: unknown = 1;
age2 - 1; // Same issue, the type itself is unknown

// Exercise 1
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let chulsoo: (string | undefined | boolean | number)[] = [user, age, married];

let school: { score: (number | boolean)[], teacher: string, friend: string | string } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}


// How to specify types for functions & void type
function practice(x: number): number {
    return x * 2;
}

// Difference from JavaScript: parameters with specified types must be provided.
practice(3);

// To make a parameter optional
// x? means undefined | number, which means it can be a number or undefined.
function practice3(x?: number): void {
    
}

practice3(); // No error.

// Special function type void
// To prevent accidental return of any value
function practice2(x: number): void {
    1 + 1;
}

function practice4(x: number | string): void {
    // narrowing is required
    if (typeof x === 'number') {
        console.log(x + 3); // Without narrowing, it causes an error. TypeScript is strict, so operations are not allowed on number | string type.
    }
}

practice4(2);

// (Exercise 1) Create a function that prints "Hello, 홍길동" when a name is given as a parameter,
// and prints "No name provided" when no parameter is given.
// Also, specify the parameter and return types.

function greet(x?: string): void {
    if (x) {
        console.log("Hello " + x);
    } else {
        console.log("No name provided.");
    }
}

// (Exercise 2) Create a function that counts the number of digits of a number or string input and returns it.
// For example, inputting '245' should return 3, and inputting 9567 should return 4.
// Only number or string inputs are allowed.

function findDigit(x: number | string): number {
    return x.toString().length;
}

// (Exercise 3) Create a function that tells the probability of marriage.
// 1. The function should accept monthly income (in ten thousands), home ownership (true/false), and charm score ('high' or 'medium' or 'low') as parameters.
// 2. Monthly income contributes 1 point per ten thousand, home ownership adds 500 points if true & 0 if false, and charm score adds 100 points only if 'high'.
// 3. If the total score is 600 or above, it should return "Marriage possible". Otherwise, it should return nothing.

function marriageProbability(monthlyIncome: number, house: boolean, charm: string): string | void {
    let score: number = 0;
    score += monthlyIncome;
    if (house === true) {
        score += 500;
    }
    if (charm === 'high') {
        score += 100;
    }
    if (score >= 600) {
        return "Marriage possible";
    }
}

console.log(marriageProbability(100, true, 'high'));