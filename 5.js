const text = "javascript";
let count = 0;

for (let i = 0; i < text.length; i++) {
  const ch = text[i];

  if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u"
  ) {
    count++;
  }
}

console.log("Vowel Count:", count);
