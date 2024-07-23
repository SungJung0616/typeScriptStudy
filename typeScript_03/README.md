# TypeScript Study Notes

## Summary

This project contains study notes and examples related to TypeScript, focusing on various aspects such as functions, union types, `any`, and `unknown` types. It also includes practical exercises to reinforce understanding. Below are key concepts and functions covered in the study:

### Key Concepts

#### Type Assertion
Type assertion allows you to override the inferred type, using as syntax, which is helpful when you know the type more specifically than TypeScript. It is useful for narrowing down union types or when you are certain about the type.

#### Type Narrowing
Type narrowing is a technique used to reduce a broader type to a more specific type, making it safe to perform operations on the variable. Common narrowing methods include typeof, instanceof, and property checks.

## Functions and Exercises

1. **Type Assertion in Arrays:**: Demonstrates how to use type assertion to clean an array containing mixed types (numbers and number strings).
   
2. **Narrowing with Union Types**: Highlights the importance of narrowing when dealing with union types to ensure safe operations, using typeof and Array.isArray.
   
3. **Handling Teacher Subjects**: Provides a practical example of using narrowing to handle objects with union types, ensuring the function returns the correct type based on the input.