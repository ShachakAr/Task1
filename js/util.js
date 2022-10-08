'use strict'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// GENERATES A STRING WITH RANDOM LOWERCASE LETTERS
// THE LENGTH OF THE STRING IS BETWEEN MIN AND MAX
function getRndStr(min, max) {
    var rndStr = ''
    var length = getRandomIntInclusive(min, max)
    var characters = 'abcdefghijklmnopqrstuvwxyz'
    for ( var i = 0; i < length; i++ ) {
      rndStr += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return rndStr
}

function getIdNum(length){
    var id = ''
    for (var i = 0; i < length; i++){
       var rndNum = getRandomIntInclusive(0,9)
        if (!id && rndNum === 0) rndNum = 9
        id += rndNum
    }
    return id
}