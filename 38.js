const arr = [10, 20, 30, 40];
const target = 30;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    found = true;
  }
}

console.log(found ? "Found" : "Not found");
