'use strict'

console.log('ex08 - numsCount')

// 8. Write the function printNumsCount(nums).
//  The array nums will contain integers in the 
// range of 0-3 such as: 
// 3 2 0 2 2 0 3
// The function prints how many times each of these numbers appears in the array. 
// GUIDANCE: the fact that the values are in a specific range allows us to use an array 
// where the index is actually the number itself. The value in the array counts the 
// appearances of the numbers. 
// e.g. for the array [3,2,0,2,2,0,3] the array will look like this: [2,0,3,2] 

var nums = [3,2,0,2,2,0,3]
var res = (printNumsCount(nums))
console.log('INPUT: ', nums, '\n' + 'EXPECTED: ', [2, 0, 3, 2], '\n' + 'ACTUAL: ', res)

function printNumsCount(nums){
    var counts = [0, 0, 0, 0]

    for (var i = 0; i < nums.length; i++){
        var currNum = nums[i]
        if (currNum === 0) counts[0]++
        if (currNum === 1) counts[1]++
        if (currNum === 2) counts[2]++
        if (currNum === 3) counts[3]++
    } return counts
}