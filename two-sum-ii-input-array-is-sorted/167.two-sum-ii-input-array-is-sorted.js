/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

   // First Approach O(n)
    // let start = 0;
    // let end = numbers.length - 1;

    // for (let i = start; i < numbers.length; i++) {
    //     if (numbers[start] + numbers[end] === target) {
    //         return [start + 1, end + 1];
    //     } else if (numbers[start] + numbers[end] < target) {
    //         start++;
    //     } else {
    //         end--;
    //     }

    // }

    // return -1;


    //Second Approach O(n), same O(n) just more concise than first approach.
    let start = 0;
    let end = numbers.length - 1;



    while (numbers[start] + numbers[end] !== target) {
        if (numbers[start] + numbers[end] > target) {
            end--;
        } else {
            start++;
        }
    }

    return [start + 1, end + 1];

};
// @lc code=end