const arr = [1, 2, 3, 2, 4, 1, 5];
const unique = [];

for (let i = 0; i < arr.length; i++) {
  let alreadyExists = false;

  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      alreadyExists = true;
    }
  }

  if (!alreadyExists) {
    unique.push(arr[i]);
  }
}

console.log("Unique:", unique);
