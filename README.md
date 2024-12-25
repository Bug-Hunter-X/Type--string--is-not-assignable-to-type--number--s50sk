# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common type error in TypeScript where a string is passed to a function expecting a number.  The compiler correctly flags this as an error, preventing runtime issues. The solution involves type checking or using type guards to ensure the arguments provided to the function are of the correct type.

## Bug

The `add` function is defined to accept two number parameters and return a number. However, the example code attempts to pass a string ('2') as the second argument. TypeScript's type system correctly catches this error.