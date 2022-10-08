'use strict'

console.log('ex15 - findMode')

// 15.Write the function findMode(mat) -

//     that will print out the number that appears most 
//     frequently in the multi-dimensional array.

// If there are ties (e.g.: both 47 and 53 appeared 17 times), print both of them, or all of 
// them. (TIP: use an object map to count the numbers) 

var gMat = createMat (4, 4)
console.table(gMat)
console.log('mode is ', findMode(gMat))

function findMode(mat){
    var mode = []
    var numsCount = []
    for (var i = 0; i < mat.length; i++){
        for (var j = 0; j < mat[0].length; j++){
            var currNum = mat[i][j]
            if (!numsCount[currNum]) numsCount[currNum] = 0  
            numsCount[currNum]++
        }
    }
    console.log('numsCount ', numsCount)
    for (var i = 0; i < numsCount.length; i++){
        var currNum = numsCount[i]
        // if (!currNum) continue
        if (!mode[0] || currNum > mode[0]){
            mode[i] = [currNum]
        } else if (mode[0] === currNum){
            mode.push(i)
        }
    }
    return mode
}

function createMat (rowCount, colCount) {
    var mat = []
    for (var i = 0; i < rowCount; i++){
        mat.push([])
        for (var j = 0; j < colCount; j++){
            mat[i].push(getRandomIntInclusive(0, 9))
        }
    }
    return mat
}