'use strict'

console.log('ex09 - multBy')

// Write the function: multBy(nums, multiplier)
//  that returns a modified array in which each 
// item in the array is multiplied by a multiplier.

// Step2: Add another param: isImmutable. It will be a variable that when it’s value is set to
// true, use array.slice() to work on a new array. Leave the original array as it was. 

console.log('multiplied array',multBy(createArray(10), 3, false))

function multBy(nums, multiplier, isImmutable) {
    if (isImmutable) return
    var newArray = []
    for (var i = 0; i < nums.length; i++) {
        newArray[i] = (nums[i] * multiplier)
    } return newArray

    // for (var i = 0; i < nums.length; i++) {
    //     newArray.push(nums[i] * multiplier)
    // } return newArray
}

function createArray(length){
    var array = []
    for (var i = 0; i < length; i++){
        var randNum = getRandomIntInclusive(1,100)
        array.push(randNum) 
    } console.log('original array: ',array) 
    return array
}
