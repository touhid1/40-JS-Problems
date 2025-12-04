const str = "I like js. JS is great. js rocks!";
let count = 0;
let word = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " " && str[i] !== "." && str[i] !== "!") {
    word += str[i];
  } else {
    if (word.toLowerCase() === "js") {
      count++;
    }
    word = "";
  }
}

console.log("JS Count:", count);
