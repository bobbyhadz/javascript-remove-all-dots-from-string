// EXAMPLE 1 - Replace all dots in a String in JavaScript

const str = 'a.b.c';

const withoutDots = str.replaceAll('.', '-');
console.log(withoutDots); // 👉️ 'a-b-c'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace all dots in a String using `String.split()`

// const str = 'a.b.c';

// const withoutDots = str.split('.').join('_');
// console.log(withoutDots); // 👉️ 'a_b_c'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace all dots in a String using `String.replace()`

// const str = 'a.b.c';

// const withoutDots = str.replace(/\./g, '_');
// console.log(withoutDots); // 👉️ 'a_b_c'
