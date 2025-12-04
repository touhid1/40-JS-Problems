const word = "hello";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
}

console.log("Reversed:", reversed);
