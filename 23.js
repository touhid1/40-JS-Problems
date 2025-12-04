const nums = [4, 9, 1, 7, 9, 8];
let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > first) {
    second = first;
    first = nums[i];
  } else if (nums[i] > second && nums[i] !== first) {
    second = nums[i];
  }
}

console.log("Second highest:", second);
