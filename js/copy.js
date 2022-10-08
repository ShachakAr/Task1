
const GAME_FREQ = 1000;
const LIFE = '🎃';
const SUPER_LIFE = '👽';

// The Model
var gBoard;
var gGameInterval;


function onInit() {
    gBoard = createBoard();
    renderBoard(gBoard)
    console.log(gBoard)
}

// click on a TD with LIFE upgrade to SUPER_LIFE and never dies
function onCellClicked(elCell, cellI, cellJ) {
    // console.log('elCell', elCell)
    // if(elCell.innerText)
    // if(elCell.classList.contains('occupied'))
    if (gBoard[cellI][cellJ] === LIFE) {
        // Model:
        gBoard[cellI][cellJ] = SUPER_LIFE
        // Dom:
        elCell.innerText = gBoard[cellI][cellJ]
        blowUpNegs(cellI, cellJ)
    }
}

// click on LIFE blows up the negs around
function blowUpNegs(cellI, cellJ) {

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= gBoard[0].length) continue
            if (i === cellI && j === cellJ) continue
            var currCell = gBoard[i][j];
            if (currCell === LIFE) {
                // Model:
                gBoard[i][j] = ''
                // Dom:
                var elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`)
                elCell.innerText = gBoard[i][j]
                elCell.classList.remove('occupied')
            }
        }
    }
}

function onToggleGame(elBtn) {
    if (gGameInterval) {
        clearInterval(gGameInterval)
        gGameInterval = null
        elBtn.innerText = 'Start'
    } else {
        gGameInterval = setInterval(play, GAME_FREQ);
        elBtn.innerText = 'Pause'
    }

}

function play() {
    gBoard = runGeneration(gBoard);
    renderBoard(gBoard);
}

function runGeneration(board) {
    var newBoard = copyMat(board);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {

            var numOfNegs = countNegs(i, j, board);
            if ((numOfNegs > 2) && (numOfNegs < 6)) {
                if (board[i][j] === '') newBoard[i][j] = LIFE;
            } else if (board[i][j] === LIFE) newBoard[i][j] = '';

        }
    }
    return newBoard;
}

function countNegs(cellI, cellJ, mat) {
    var negsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= mat[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            // if (mat[i][j] === LIFE || mat[i][j] === SUPER_LIFE) negsCount++;
            if (mat[i][j]) negsCount++;
        }
    }
    return negsCount;
}

function renderBoard(board) {
    // console.table(board);
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var className = currCell ? 'occupied' : ''
            strHTML += `<td class="${className}"
            data-i="${i}" data-j="${j}"
            onclick="onCellClicked(this,${i},${j})">
            ${currCell}</td>`
        }
        strHTML += `</tr>\n`
    }
    // console.log('strHTML', strHTML)
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function createBoard() {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board.push([])
        for (var j = 0; j < 6; j++) {
            board[i][j] = (Math.random() > 0.5) ? LIFE : ''
        }
    }
    return board;
}