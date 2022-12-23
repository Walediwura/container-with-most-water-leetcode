/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let res = 0;

    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        let area = (end - start) * Math.min(height[start], height[end]);
        res = Math.max(res, area);

        if (height[start] < height[end]) {
            start++;
        } else if (height[start] > height[end]) {
            end--;
        } else {
            end--;
        }
    }

    return res;

};
// @lc code=end