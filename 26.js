const product = {
  name: "Bag",
  price: 300,
  color: "black"
};

for (let key in product) {
  console.log(key + ":", product[key]);
}
