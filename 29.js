const user = {
  name: "Tariq",
  age: 22
};

const key = "email";

if (user[key] !== undefined) {
  console.log("Found");
} else {
  console.log("Not Found");
}
