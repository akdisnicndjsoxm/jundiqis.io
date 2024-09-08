let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`玩家 ${board[a]} 获胜！`);
            resetGame();
            return;
        }
    }
    if (!board.includes('')) {
        alert('平局！');
        resetGame();
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        if (board[index] === '') {
            board[index] = currentPlayer;
            this.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

document.getElementById('reset').addEventListener('click', resetGame);
