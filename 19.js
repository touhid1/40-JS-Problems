const sentence = "I love JavaScript very much!";
let count = 1;

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === " ") {
    count++;
  }
}

console.log("Word count:", count);
