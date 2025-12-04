const str = "JavaScript is awesome";
let count = 0;
const vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

console.log("Vowel count:", count);
