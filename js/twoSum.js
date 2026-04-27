/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const map = {};

    for (let i = 0; i < nums.length; i++) {

        const res = target - nums[i];

        if (map[res] != null) {
            return [map[res], i];
        }

        map[nums[i]] = i;
    }

    return [];
};


console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
