'use strict'

console.log('ex-16 - Bingo')

var gGameInterval
var gNums = []
var gPlayers = [
    { name: 'lucky', hitsCount: 0, board: createBingoBoard(5) },
    { name: 'drumps', hitsCount: 0, board: createBingoBoard(5) }
]


function createBingoBoard(size) {
    var nums = []
    for (var i = 1; i <= 100; i++) {
        nums.push(i)
    }

    var board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            var rndNum = getRandomIntInclusive(0, nums.length - 1)
            board[i][j] = (
                {
                    value: nums[rndNum] + '',
                    isHit: false
                }
            )
            nums.splice(rndNum, 1)
        }
    }
    return board
}

function printBingoBoard(board) {
    var printedBoard = []
    for (var i = 0; i < board.length; i++) {
        printedBoard[i] = []
        for (var j = 0; j < board.length; j++) {
            var currCell = board[i][j]
            // printedBoard[i][j] = (currCell.ishit) ? currCell.value + ' V' :  currCell.value
            if (!currCell.isHit) printedBoard[i][j] = currCell.value
            else printedBoard[i][j] = currCell.value + ' V'
        }
    } return printedBoard
}

console.log('board 1')
console.table(printBingoBoard(gPlayers[0].board))
console.log('board 2')
console.table(printBingoBoard(gPlayers[1].board))

playBingo()

function playBingo() {
    // fill gNums with numbers
    for (var i = 1; i <= 100; i++) {
        gNums.push(i + '')
    }
    gGameInterval = setInterval(playTurn, 1000)
}

function playTurn() {

    var isVictory = false
    var calledNum = drawNum()

    console.log('calledNum :>> ', calledNum);

    for (var i = 0; i < gPlayers.length; i++) {
        var player = gPlayers[i]

        markBoard(player, calledNum)

        isVictory = checkBingo(player)

        console.table(printBingoBoard(player.board))
    }

}

function checkBingo(player) {
    if (player.hitsCount === player.board.length ** 2) {
        console.log(player.name, ' won the game!')
        clearInterval(gGameInterval)
        gNums = []
        return true
    }
    else return false
}

function markBoard(player, calledNum) {

    for (var i = 0; i < player.board.length; i++) {
        for (var j = 0; j < player.board.length; j++) {
            var currCell = player.board[i][j]
            if (currCell.value === (calledNum + '')) {
                currCell.isHit = true
                player.hitsCount++
                checkRowForBingo(player, i)
                if (i = j) checkPrimaryDiagonalForBingo(player)
                // if (i + j === player.board.length - 1) checkSecondaryDiagonalForBingo(player)
            }
        }
    }
}

function drawNum() {
    var rndNum = getRandomIntInclusive(0, gNums.length - 1)
    return gNums.splice(rndNum, 1)[0] + ''
}

// iii. Print a happy greeting when a player:

// 1. completes a row: ‘Muki has completed a row!’
function checkRowForBingo(player, rowIdx,) {
    for (var i = 0; i < player.board.length; i++) {
        if (!player.board[rowIdx][i].isHit) return
    }
    console.log(player.name, ' has completed a row - congrats!')
}

function checkPrimaryDiagonalForBingo(player) {
    for (var i = 0; i < player.board.length; i++) {
        if (!player.board[i][i].isHit) return
    }
    console.log(player.name, ' has completed the primary diagonal - congrats!')
}

function checkSecondaryDiagonalForBingo(player) {
    for (var i = 0; i < player.board.length; i++) {
        for (var j = 0; j < player.board.length; j++) {
            if (i + j === player.board.length - 1) {
                if (!player.board[i][j].isHit) return
            }
        }
    }
    console.log(player.name, ' has completed the secondery diagonal - congrats!')
}

