const arr = [1, 2, 3, 4, 5, 6];
const oddOnly = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddOnly.push(arr[i]);
  }
}

console.log("Odds:", oddOnly);
