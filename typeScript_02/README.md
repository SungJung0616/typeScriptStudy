# TypeScript Study Notes

## Summary

This project contains study notes and examples related to TypeScript, focusing on variable types, including union types, `any`, and `unknown`. It demonstrates how to declare variables with multiple types, the implications of using `any` and `unknown`, and some practical exercises to reinforce understanding.

## Key Concepts

### Union Type

Use `string | number` to allow a variable to accept both strings and numbers. Similarly, use `(number | string)[]` to allow an array to contain both types.

### Any Type

The `any` type deactivates TypeScript's type checking, allowing any type to be assigned. This can lead to potential issues and should be used cautiously.

### Unknown Type

Similar to `any`, but TypeScript requires you to perform type checking before assigning it to other types. This makes `unknown` safer than `any`.

### Type Compatibility

You can't directly assign an `unknown` type to a specific type without type assertion or checking. Arithmetic operations also require the operands to be `number`.

### Union Type in Operations

TypeScript is strict about operations on union types. For example, `string | number` cannot directly participate in arithmetic operations because TypeScript cannot determine which type will be used at runtime.