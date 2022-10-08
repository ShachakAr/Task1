'use strict'

console.log('ex07 - sumArrays')

// 7. Write the function sumArrays that gets 2 arrays
//  and returns the sum of the two arrays. I.e: 
// [1, 4, 3] [2, 5, 1, 9] => [3, 9, 4, 9] 
// TIP: this can be done in a single loop by first identifying the shorter or longer array from the 
// two. 

// var arr1 = [1, 4, 3]
// var arr2 = [2, 5, 1, 9]

// var res = sumArrays()
// console.log('res :>> ', res);

function sumArrays(arr1, arr2) {
    var arr1 = getArrayFromUser()
    console.log('arr1 :>> ', arr1)
    var arr2 = getArrayFromUser()
    console.log('arr2 :>> ', arr2)
    var sumOfArrays = []
    var longerArray = []
    longerArray = (arr1.length > arr2.length) ? arr1 : arr2

    for (var i = 0; i < longerArray.length; i++) {
        if (!arr1[i]) arr1[i] = 0
        if (!arr2[i]) arr2[i] = 0

        sumOfArrays[i] = arr1[i] + arr2[i]
    } return sumOfArrays 
}

// Step2: Read these arrays from the user (until the number 999 is entered) TIP: write the
// function: getArrayFromUser and call it twice

function getArrayFromUser() {
    var arr1 = []
    var newNum = +prompt('enter number to the2 array' + '\n' + 'type 999 to exit')
    
    while (newNum !== 999) {
        arr1.push(newNum)
        newNum = +prompt('enter number to the2 array' + '\n' + 'type 999 to exit')
        
    } return arr1
   
}