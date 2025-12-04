const sentence = "I love learning JavaScript every day";
let word = "";
let longest = "";

for (let i = 0; i <= sentence.length; i++) {
  if (sentence[i] !== " " && i !== sentence.length) {
    word += sentence[i];
  } else {
    if (word.length > longest.length) {
      longest = word;
    }
    word = "";
  }
}

console.log("Longest word:", longest);
