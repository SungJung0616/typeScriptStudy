// Type assertion and narrowing

function example(x: number | string) {
    return x + 1;
}

// Since x is a union type of number or string, narrowing must be used.

function example1(x: number | string) { // When the type is ambiguous, narrowing is necessary.
    if (typeof x === 'string') {
        return x + '1';
    } else {
        return x + 1;
    }
}

example1(123);

function example2(x: number | string) {
    let array: number[] = [];
    if (typeof x === "number") {
        array[0] = x;
    } else {

    }

    // Examples of narrowing methods include typeof variable, property name in object data, and instance instanceof (checking if an object is a child of a parent class).
}

example2(123);

// Type assertion syntax. Syntax to override the type.
function example3(x: number | string) {
    let array: number[] = [];
    array[0] = x as number; // Using "as" to assert that the variable (x) on the left is a number.
}

// Usage of "as" syntax:
// 1. Used for narrowing when dealing with multiple union types.
// 2. Used when you are 100% certain of the type. For instance, in example3('123'), there is no error because you are sure that only a number will be used.
// In the past, <number>name was used, but it can be confusing with <number> tags in React, so x as number is used instead.

// (Assignment 1) You have an array that stores multiple numbers, but sometimes you find number strings like '4', '5'. 
// You need a function to clean this up. 
// If you input an array with mixed numbers and strings, such as ['1', 2, '3'], 
// the function should cleanly convert them to numbers, resulting in [1, 2, 3].

function cleaning(array: (number | string)[]) {
    let cleaningArray: number[] = [];
    array.forEach((b) => {
        if (typeof b === 'string') {
            cleaningArray.push(parseFloat(b));
        } else {
            cleaningArray.push(b);
        }
    });

    return cleaningArray;
}

// Using map method.
function cleanArray(arr: (string | number)[]): number[] {
    return arr.map(item => Number(item));
}

// (Assignment 2) Create the following function.
let teacher1 = { subject: 'math' }
let teacher2 = { subject: ['science', 'english'] }
let teacher3 = { subject: ['science', 'art', 'korean'] }

// Teachers have their subjects stored in variables. 
// Teachers who teach only one subject have it stored as a single string,
// while teachers who teach multiple subjects have them stored in an array.  

// Create a function that takes an object like 'teacher1' as a parameter 
// and returns the last subject that the teacher teaches.
// Also, specify the types strictly.

function findSubject(teacher: { subject: string | string[] }) {
    if (typeof teacher.subject === 'string') { // How to access the value in an object
        return teacher.subject;
    } else if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    } else {
        return 'Error';
    }
}
