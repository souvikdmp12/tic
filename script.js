let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell) {
    if (!cell.innerText && !gameOver) {
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            document.getElementById('message').innerText = `Player ${cells[a].innerText} wins!`;
            gameOver = true;
            return;
        }
    }

    if ([...cells].every(cell => cell.innerText)) {
        document.getElementById('message').innerText = "It's a draw!";
        gameOver = true;
    }
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('X', 'O');
    });
    document.getElementById('message').innerText = "Player X's Turn";
    currentPlayer = 'X';
    gameOver = false;
}

resetBoard();
