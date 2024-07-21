document.addEventListener("DOMContentLoaded", () => {
    const boardSize = 10;
    const bombCount = 10;
    const board = document.getElementById("game-board");
    let cells = [];
    let bombs = [];

    // Create game board
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", () => revealCell(cell));
        board.appendChild(cell);
        cells.push(cell);
    }

    // Place bombs randomly
    while (bombs.length < bombCount) {
        const index = Math.floor(Math.random() * cells.length);
        if (!bombs.includes(index)) {
            bombs.push(index);
            cells[index].classList.add("bomb");
        }
    }

    // Reveal cell
    function revealCell(cell) {
        if (cell.classList.contains("revealed")) return;
        cell.classList.add("revealed");

        if (cell.classList.contains("bomb")) {
            alert("Oyun Bitti! Mayın bulundu.");
            cells.forEach(c => c.classList.add("revealed"));
        } else {
            const index = parseInt(cell.dataset.index);
            const adjacentCells = getAdjacentCells(index);
            const bombCount = adjacentCells.filter(i => cells[i].classList.contains("bomb")).length;
            cell.textContent = bombCount || "";
        }
    }

    // Get adjacent cells
    function getAdjacentCells(index) {
        const adjacent = [];
        const row = Math.floor(index / boardSize);
        const col = index % boardSize;

        for (let r = -1; r <= 1; r++) {
            for (let c = -1; c <= 1; c++) {
                if (r === 0 && c === 0) continue;
                const newRow = row + r;
                const newCol = col + c;
                if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
                    adjacent.push(newRow * boardSize + newCol);
                }
            }
        }

        return adjacent;
    }
});
