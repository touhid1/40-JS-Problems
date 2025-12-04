const originalPrice = 200;
const discountPercent = 15;

const discountAmount = (originalPrice * discountPercent) / 100;
const finalPrice = originalPrice - discountAmount;

console.log("Final Price:", finalPrice);
