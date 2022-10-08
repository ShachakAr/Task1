'use strict'

console.log('ex06 longest/shortest names')

// Write a function that gets a string of names delimited by a comma. I.e: 'igal,moshe,haim' 
// and prints the longest name, and the shortest name. Tip: use the function indexOf, note 
// that the function accepts 2 parameters 

getLongShortNames('david,yoav,li,matanel,')


function getLongShortNames(str) {
    var longestName = ''
    var shortestName = str
    var indexOfLastComma = 0
    var currName = ''

    for (var i = 0; i < str.length; i++) {
        indexOfLastComma = str.indexOf(',', i)
        currName = str.substring(i, indexOfLastComma)
        
        i = indexOfLastComma
        // if (indexOfLastComma === -1) break

        if (currName.length < shortestName.length) shortestName = currName
        if (currName.length > longestName.length) longestName = currName
    }
    console.log('longestName :>> ', longestName);
    console.log('shortestName :>> ', shortestName);
}