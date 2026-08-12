const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

// Todas as combinações possíveis para vencer
const winConditions = [
    [0, 1, 2], // Linha 1
    [3, 4, 5], // Linha 2
    [6, 7, 8], // Linha 3
    [0, 3, 6], // Coluna 1
    [1, 4, 7], // Coluna 2
    [2, 5, 8], // Coluna 3
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundária
];

// Inicializa o jogo adicionando eventos de clique nas células
cells.forEach(cell => cell.addEventListener('click', cellClicked));

function cellClicked() {
    const cellIndex = this.getAttribute('data-index');

    // Se a célula já estiver preenchida ou o jogo acabou, não faz nada
    if (board[cellIndex] !== "" || !running) {
        return;
    }

    atualizarCelula(this, cellIndex);
    checarVencedor();
}

function atualizarCelula(cell, index) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    
    // Adiciona a classe css correta para colorir o X ou O
    cell.classList.add(currentPlayer.toLowerCase());
}

function trocarJogador() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = `Vez do jogador ${currentPlayer}`;
}

function checarVencedor() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = board[condition[0]];
        const cellB = board[condition[1]];
        const cellC = board[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Jogador ${currentPlayer} Venceu!`;
        running = false;
    } else if (!board.includes("")) {
        statusText.textContent = `Deu Velha! (Empate)`;
        running = false;
    } else {
        trocarJogador();
    }
}

function reiniciarJogo() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `Vez do jogador ${currentPlayer}`;
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove('x', 'o');
    });
    running = true;
}