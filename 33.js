const num = 29;
let isPrime = true;

if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
}

console.log(isPrime ? "Prime" : "Not Prime");
