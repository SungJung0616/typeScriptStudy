// 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly
// Using type alias to store types

type Animal = number | string | undefined;
let animal: Animal;
animal = 123;

// The 'type' keyword for creating type aliases.
// Think of type alias as a nickname or alias for a type.
// Use uppercase for type names to distinguish them from variables.
// Object types can also be defined using type alias.
type Animal2 = { name: string, age: number };
let animal2: Animal2 = { name: 'tiger', age: 4 };

// 'const' prevents reassignment
const birthRegion = 'seoul';

const birthRegion1 = { city: 'busan' }
birthRegion1.city = 'seoul';  // Even with 'const', the properties of the object can be changed. This is a JavaScript feature.

type GirlFriend = {
    readonly name: string, // 'readonly' makes the property immutable.
    age?: number // '?' indicates that the property is optional and can be 'number' or 'undefined'.
}
const girlFriend: GirlFriend = {
    name: "emma",
    age: 123
}

girlFriend.name = 'yuna' // Error: 'name' is readonly and cannot be changed.

// Type aliases can be combined
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY; // Combines types. This can be referred to as extending. Using '&' to extend object types.

let position: NewType = { x: 4, y: 10 };

// Type aliases cannot be redefined
// type PositionX = { x: string } // This is not allowed.

// (Homework 1) What happens if type alias with object types containing overlapping properties are combined using '&'?
type PositionZ = { x: string, z: number };
type NewType2 = PositionZ & PositionX;

let position1: NewType2 = { x: 10, z: 20 }; // Error: Type 'number' is not assignable to type 'string'.

// (Homework 2) Create a type that meets the following conditions:

// 1. This type must be an object type.
// 2. This type may have a 'color' property which must be a string if it exists.
// 3. This type must have a 'size' property which must be a number.
// 4. This type must have a 'position' property which is a readonly array of numbers.
// Create this using type alias.

type Object1 = { size: number };
type Object2 = { color?: string }; // 'color' is optional
type Object3 = { readonly position: number[] }; // 'position' is immutable

type NewType3 = Object1 & Object2 & Object3; // extend works

let test2: NewType3 = {
    size: 123,
    position: [123, 133, 4442],
    color: 'black'
}
// other 

type NewType1 = { 
    color: string,
    size: number,
    readonly position: number[],
}

let test1: NewType1 = {
    color: 'yellow',
    size: 123,
    position: [123, 3]
}

