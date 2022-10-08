'use strict'

// 4. Asterisks!
console.log('ex04 Asterisks')

// a. Write the function getAsterisks(length) that returns a string containing asterisks 
// according to the number supplied.
// For example: when the requested length is 4, it returns '****'

// var res = getAsterisks(3)
// console.log('res :>> ', res);

function getAsterisks(length, sign) {

    var asterisksInLine = ''
    for (var i = 0; i < length; i++) {
        asterisksInLine += sign
    } return asterisksInLine
}


// b. Write a function named: getTriangle(height) that returns a triangle:
// (the parameter value here is 4)
// Hint: use the function getAsterisks in a loop. Also, use ‘\n’ to create a new line.

// var res = getTriangle(4)
// console.log('res :>> ', res);

function getTriangle(height) {

    var triangle = ''

    for (var i = 0; i < 2 * height; i++) {

        if (i <= height) triangle += getAsterisks(i, '*') + '\n'
        else triangle += getAsterisks(height * 2 - i, '*') + '\n'

    } return triangle
}

// c. Write a function named: getMusicEqualizer(rowsCount) that generates random 
// numbers between 1 and 10 and return columns in random lengths: 

// var res = getMusicEqualizer(16)
// console.log('res :>>' + '\n' + res);

function getMusicEqualizer(rowsCount) {
    var columnsOfAsterisks = ''
    for (var i = 0; i < rowsCount; i++) {
        var randNum = getRandomIntInclusive(1, 10)
        columnsOfAsterisks += getAsterisks(randNum, '*') + '\n'
    } return columnsOfAsterisks
}

// The maximum and the minimum are inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// d. Write a function that returns a block of asterisks (*) by the following parameters:
// rowsCount and colsCount. I.e: for 4, 5

// var res = createABlock(4, 7)
// console.log('res :>>' + '\n' + res);

function createABlock(rowsCount, colsCount) {
    var block = ""

    for (var i = 0; i < rowsCount; i++) {
        block += getAsterisks(colsCount, '*') + '\n'
    } return block
}
// Now, return only the outline:

var resOutline = createOutline(4, 8)
console.log('resOutline :>> ' + '\n' + resOutline);


function createOutline(rowsCount, colsCount) {
    var outline = ''
    for (var i = 0; i < rowsCount; i++) {
        if (i === 0 || i === rowsCount - 1) {
            outline += getAsterisks(colsCount, '*') + '\n'
        } else {
            outline += '*'
            for(var j = 0; j < colsCount - 2; j++){
                outline += ' '
            }
            outline += '*' + '\n'
        }
    } return outline
}
// e. Surprise, there is a new requirement to support any character (not necessarily
// asterisk), how easy would it be to refactor your code? The character should be
// decided by the user

// ANOTHER OPTION AFTER CHANGING THE ASTERISKS
function createOutline2(rowsCount, colsCount) {
    var outline = ''
    for (var i = 0; i < rowsCount; i++) {
        if (i === 0 || i === rowsCount - 1) {
            outline += getAsterisks(colsCount, '*') + '\n'
        }
        else {
            outline += '*' + getAsterisks(colsCount - 2, " ") + '*' +'\n'
        }
    } return outline
}