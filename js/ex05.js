'use strict'

console.log('ex05 - myIndexOf')

// 5. Write a function named myIndexOf(str, searchStr) that accepts 2 strings.
//  The function returns the index of the second string in the first,
//  if it wasn’t found, return -1 (don’t use the 
// built-in indexOf...). 

var indexOf = myIndexOf('hi therez every one', 'z')
console.log('the index is: ', indexOf);

function myIndexOf(str, searchStr) {
    var currLetter = ''
    for (var i = 0; i < str.length; i++) {
        currLetter = str[i]
        if (currLetter === searchStr) return i
    }  return -1
}