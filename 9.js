const nums = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = nums.length - 1; i >= 0; i--) {
  reversed.push(nums[i]);
}

console.log("Reversed Array:", reversed);
