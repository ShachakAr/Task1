'use strict'

console.log('ex-17 - Game of life')

const LIFE = '🐙'
var gBoard;
var gGameInterval;
var gMinLifeForms = Infinity
var gMaxLifeForms = -Infinity
var gCurrLifeForms = 0

function onInit() {
    gBoard = createBoard(7, 9)
    renderBoard(gBoard)
    console.table(gBoard)
    // console.log(findNegs(2,2,gBoard))
    console.table(runGeneration(gBoard))
    // gGameInterval = setInterval(play, 2000)
    
    
}

function onToggleGame(elBtn) {
    if (gGameInterval) {
        clearInterval(gGameInterval)
        gGameInterval = null
        elBtn.innerText = 'Start'
    } else {
        gGameInterval = setInterval(play, 1000);
        elBtn.innerText = 'Pause'
    }

}


function play() {
    gBoard = runGeneration(gBoard)
    renderBoard(gBoard)
}

// generate board
function createBoard(rowsCount, colCount) {
    var board = []
    for (var i = 0; i < rowsCount; i++) {
        board[i] = []
        for (var j = 0; j < colCount; j++) {
            board[i][j] = (Math.random() > 0.6) ? LIFE : ''
            if (board[i][j] === LIFE) gCurrLifeForms++
        }
    }
    gMinLifeForms = gCurrLifeForms
    gMaxLifeForms = gCurrLifeForms
    return board
}
// TODO: add onClick option
function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var cellClass = currCell ? 'LIFE' : ''
            strHTML += `<td class="${cellClass}" 
            "cell"
            data-i="${i}" data-j="${j}">
            ${currCell}</td>`
        }
        strHTML += `</tr>`
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    // TODO: curr life count
    var elCurrLife = document.querySelector('.curr-life span')
    elCurrLife.innerText = gCurrLifeForms
    // TODO: max life count
    var elMaxLife = document.querySelector('.max-life span')
    elMaxLife.innerText = gMaxLifeForms
    // TODO: min life count
    var elMinLife = document.querySelector('.min-life span')
    elMinLife.innerText = gMinLifeForms

}

function findNegs(cellI, cellJ, board) {
    var negsCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[0].length) continue
            if (i === cellI && j === cellJ) continue

            var currCellContent = board[i][j]
            if (currCellContent) negsCount++
        }
        // console.log(cellI, cellJ, negsCount)
    }
    return negsCount
}

function runGeneration(board) {
    gCurrLifeForms = 0 
    var newBoard = copyBoard(board)
    for (var i = 0; i < newBoard.length; i++) {
        for (var j = 0; j < newBoard[0].length; j++) {
            var negsCount = findNegs(i, j, board)
            if (negsCount <= 2 || negsCount >= 6) {
                if (board[i][j] === LIFE) newBoard[i][j] = ''
            } else if (board[i][j] === '') newBoard[i][j] = LIFE
            if (newBoard[i][j] === LIFE) gCurrLifeForms++
        }
    }
    if (gCurrLifeForms > gMaxLifeForms) gMaxLifeForms = gCurrLifeForms
    if (gCurrLifeForms < gMinLifeForms) gMinLifeForms = gCurrLifeForms
    return newBoard
}

function copyBoard(board) {
    var newBoard = [];
    for (var i = 0; i < board.length; i++) {
        newBoard[i] = [];
        for (var j = 0; j < board[0].length; j++) {  
            newBoard[i][j] = board[i][j];
        }
    }
    return newBoard;
}