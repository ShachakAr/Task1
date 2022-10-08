'use atrict'

console.log('ex14 -multi-dimensional arrays')

var gMat = createMultiDimensionalArray(3,4)
console.table(gMat)

console.log('column sum is ', sumCol(gMat, 1))
console.log('row sum is ', sumRow(gMat, 1))
console.log('biggest num in column is ', findMax(gMat, 2) )
console.log('mat avg is ', findAvg(gMat))
console.log('sum of area ', sumArea(gMat, 1, 2, 1, 2))

// 14.Fill up a multi-dimensional array with numbers.
function createMultiDimensionalArray (rowCount, colCount) {
    var mat = []
    for (var i = 0; i < rowCount; i++){
        mat.push([])
        for (var j = 0; j < colCount; j++){
            mat[i].push(getRandomIntInclusive(1, 10))
        }
    }
    return mat
}
//     Write the following functions: 
//     a. sumCol(mat, colIdx)
function sumCol(mat, colIdx){
    var colSum = 0
    for (var i = 0; i < mat.length; i++){
        colSum += mat[i][colIdx]
    }
    return colSum
}

//     b. sumRow(mat, rowIdx)
function sumRow (mat, rowIdx){
    var rowSum = 0
    for (var i = 0; i < mat[0].length; i++){
        rowSum += mat[rowIdx][i]
    }
    return rowSum
}

//     c. findMax(mat, colIdx)
// TO MY UNDERSTANDING I AM LOKKING FOR THE MAX COLUMN
function findMax(mat, colIdx){
    var maxNum = 0
    for (var i = 0; i < mat.length; i++){
        if (mat[i][colIdx] > maxNum) maxNum = mat[i][colIdx]
    }
    return maxNum
}

//     d. findAvg(mat)
function findAvg(mat){
    var matSum = 0
    for (var i = 0; i < mat.length; i++){
        for (var j = 0; j < mat[0].length; j++){
            matSum += mat[i][j]
        }
    }

    return (matSum / (mat.length * mat[0].length))
}

//     e. sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)
function sumArea (mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd){
    var areaSum = 0
    for (var i = rowIdxStart; i <= rowIdxEnd; i++){
        for (var j = colIdxStart; j <= colIdxEnd; j++){
            areaSum += mat[i][j]
        }
    }
    return areaSum
}
