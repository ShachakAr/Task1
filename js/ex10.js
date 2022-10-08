'use strict'

console.log('ex10 - mySplit')

// 10.Implement your own version of the split function: mySplit(str, sep)
//  Test it with different types of strings and separators.
//  I.e ‘Japan,Russia,Sweden'
// You can assume that the separator (delimiter) is a single character.
//  (BONUS: don’t assume that) .

console.log(mySplit('Japan,,,,,Russia,,Sweden,', ','))

function mySplit(str, sep){
    var spleatedStr = []
    var sepIndx = 0
    var currWord = ''
    
    for (var i = 0; i < str.length; i++){

        if(sepIndx === -1) break

    sepIndx = str.indexOf(sep, i)
    // console.log('sepIndx :>> ', sepIndx)
    currWord = str.substring(i, sepIndx)
    i = sepIndx
    // console.log('currWord :>> ', currWord)
    if(currWord !== ''){
        spleatedStr.push(currWord)
    } else continue
    
    } return spleatedStr

}

