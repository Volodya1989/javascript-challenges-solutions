// Write a function that takes a sorted array of numbers and removes duplicates from the array
// Do not create a new array, instead modify the original array
// There is no need to return anything from this function

var removeDuplicates = (nums)=> {
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let nextNum = nums[i+1];

        if(num===nextNum){
            nums.splice(i,1);
            i--;
        }
    }
};
