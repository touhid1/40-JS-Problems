const arr = [1, 2, 3, 4];
const rotated = [];

rotated[0] = arr[arr.length - 1];
for (let i = 0; i < arr.length - 1; i++) {
  rotated[i + 1] = arr[i];
}

console.log("Rotated:", rotated);
