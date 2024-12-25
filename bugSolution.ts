function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, 2); // Correct: result1 is 3
let result2 = addSafe(1, 2); //Correct : result2 is 3

// Using type assertion (Use cautiously)
let result3 = add(1, <number>"2"); // result3 is 3 (But this is not recommended.)

let result4 = addSafe(1, parseInt("2")); //Correct : result4 is 3 