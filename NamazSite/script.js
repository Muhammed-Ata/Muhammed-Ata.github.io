document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('chessboard');

    // Tahtayı oluştur
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
    }

    const pieces = [
        '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
        '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
        '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
    ];

    // Taşları yerleştir
    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        if (pieces[index]) {
            const piece = document.createElement('div');
            piece.classList.add('piece');
            piece.textContent = pieces[index];
            if (index < 16) {
                piece.classList.add('black');
            } else if (index >= 48) {
                piece.classList.add('white');
            }
            square.appendChild(piece);
        }
    });
});
