let a = 5;
let b = 8;

// অদলবদল করা temp ছাড়া
a = a + b;
b = a - b;
a = a - b;

console.log("a:", a, "b:", b);
