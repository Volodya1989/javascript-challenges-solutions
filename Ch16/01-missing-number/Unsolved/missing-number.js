// Write a function that takes an unsorted array of positive and unique integers and returns the number missing from the array

const missingNumber = (nums) => {
  let numsPresent = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    numsPresent[num] = true;
  }
  for (let i = 0; i < nums.length + 1; i++) {
    if (!numsPresent[i]) return i;
  }
};
