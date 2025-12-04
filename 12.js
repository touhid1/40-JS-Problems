const a = [1, 2];
const b = [3, 4];
const merged = [];

for (let i = 0; i < a.length; i++) {
  merged.push(a[i]);
}
for (let i = 0; i < b.length; i++) {
  merged.push(b[i]);
}

console.log("Merged:", merged);
