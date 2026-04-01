# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
In this file, I explored how to use literal types as an alternative to enums. Instead of creating a full enum, you can use the | operator to list the allowed values directly. I also learned that if we use the type keyword to give that union a name so I can reuse it anywhere in my code without retyping it every time I need it. 

## 07-custom-type-role.ts
In this file, I learned how to create custom types using the `type` keyword. What I liked about this is that I can create simple types like `Role`, `Status`, and `Department` and reuse them inside a bigger object type like `User` without redefining them all over again. I also learned that object types can have nested properties like `address` inside `User`. Once a type is defined, every object using it must follow that exact structure — no more, no less.

## 08-functions.ts
This file is all about how TypeScript handles functions. I learned how to add return type annotations to make it clear what a function should give back. The three types that stuck with me are: a regular return type when the function gives back a value, `void` when the function finishes but gives back nothing, and `never` when the function never finishes at all — like when it throws an error. I also learned how to pass functions as arguments to other functions which is called a callback.

## 09-special-types.ts
In this file I learned the difference between `null` and `undefined`. Before this I thought they were the same but now I know that `null` means you intentionally left it empty while `undefined` means the value was never given in the first place. I also learned two very useful operators — `??` which gives a fallback value only when something is `null` or `undefined`, and `?.` which lets you safely access a property deep inside an object without crashing if
one of the levels does not exist.

## 10-form.html and 10-type-narrowing.ts
This was one of the most interesting files for me because I got to see TypeScript working in an actual browser with a real HTML form. I learned that when you use `getElementById()`, TypeScript only sees it as `HTMLElement | null` — it does not know if it is an input. So I had to learn how to narrow the type using four different approaches: checking with `if`, using `!` to tell TypeScript I am sure it exists, and using `as HTMLInputElement` to cast it to the exact type I need.

## 11-optional.ts
This file taught me about optional values using `?` and the `??` operator. I learned that putting `?` on a function parameter or object property means it can be skipped and TypeScript will not complain. The thing that really stood out to me was the difference between `??` and `||`. Before this I always used `||` for fallback values but now I know that `||` treats `0` and empty strings as falsy which can cause wrong results. Using `??` is safer because it only kicks in when the value is actually `null` or `undefined`.

