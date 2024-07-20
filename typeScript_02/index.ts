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

// Homework
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let chulsoo: (string | undefined | boolean | number)[] = [user, age, married];

let school: { score: (number | boolean)[], teacher: string, friend: string | string } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}
