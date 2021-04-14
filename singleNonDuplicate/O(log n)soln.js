// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Follow up: Your solution should run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
 

// Constraints:

// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^5

/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let s = 0;
    let e = nums.length - 1;
    let m = Math.ceil((s+e) /2);

    while (nums[m] === nums[m - 1] || nums[m] === nums[m + 1]) {
        if (m % 2 !== 0 && nums[m] === nums[m - 1]) {
            s = m + 1;
        } else if (m % 2 === 0 && nums[m] === nums[m + 1]) {
            s = m + 2;
        } else if (m % 2 !== 0 && nums[m] === nums[m + 1]) {
            e = m - 1;
        } else if (m % 2 === 0 && nums[m] === nums[m - 1]) {
            e = m - 2;
        }
        m = Math.ceil((s+e) /2);
    }

    return nums[m]
};