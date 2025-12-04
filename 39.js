const number = 4391;
let str = number.toString();
let sum = 0;

for (let i = 0; i < str.length; i++) {
  sum += Number(str[i]);
}

console.log("Sum of digits:", sum);
