# TypeScript Study Notes

## Summary

This project contains study notes and examples related to TypeScript, focusing on various aspects such as functions, union types, `any`, and `unknown` types. It also includes practical exercises to reinforce understanding. Below are key concepts and functions covered in the study:

### Key Concepts

#### Union Type

Use `string | number` to allow a variable to accept both strings and numbers. Similarly, use `(number | string)[]` to allow an array to contain both types.

#### Any Type

The `any` type deactivates TypeScript's type checking, allowing any type to be assigned. This can lead to potential issues and should be used cautiously.

#### Unknown Type

Similar to `any`, but TypeScript requires you to perform type checking before assigning it to other types. This makes `unknown` safer than `any`.

#### Type Compatibility

You can't directly assign an `unknown` type to a specific type without type assertion or checking. Arithmetic operations also require the operands to be `number`.

#### Union Type in Operations

TypeScript is strict about operations on union types. For example, `string | number` cannot directly participate in arithmetic operations because TypeScript cannot determine which type will be used at runtime.

## Functions and Exercises

1. **Basic Function with Type Specification**: Demonstrates how to specify types for function parameters and return values.
   
2. **Optional Parameters**: Shows how to make a parameter optional using `?`, indicating that the parameter can be `undefined` or the specified type.
   
3. **Void Type**: Explains the use of `void` to indicate that a function does not return a value and to prevent accidental returns.
   
4. **Narrowing**: Highlights the need for type narrowing when dealing with union types to perform operations safely.