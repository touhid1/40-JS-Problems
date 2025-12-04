const arr = [1, 2, 2, 3, 3, 3];
const freq = {};

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (freq[item] === undefined) {
    freq[item] = 1;
  } else {
    freq[item]++;
  }
}

console.log(freq);
