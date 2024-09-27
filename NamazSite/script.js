document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('gameContainer').classList.remove('hidden');
    startPacman();
});

function startPacman() {
    const canvas = document.getElementById('pacmanCanvas');
    const context = canvas.getContext('2d');
    
    let pacman = {
        x: 50,
        y: 50,
        radius: 20,
        speed: 2,
        direction: { x: 1, y: 0 }
    };

    function drawPacman() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Pac-Man gövdesi
        context.beginPath();
        context.arc(pacman.x, pacman.y, pacman.radius, 0.2 * Math.PI, 1.8 * Math.PI); // Pac-Man'in ağzı açık hali
        context.lineTo(pacman.x, pacman.y);
        context.fillStyle = '#FFEB3B';
        context.fill();
        context.closePath();

        // Pac-Man gözü
        context.beginPath();
        context.arc(pacman.x + 10, pacman.y - 10, 3, 0, 2 * Math.PI);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
    }

    function updatePacman() {
        pacman.x += pacman.speed * pacman.direction.x;
        pacman.y += pacman.speed * pacman.direction.y;

        // Duvarlardan sekme
        if (pacman.x + pacman.radius > canvas.width || pacman.x - pacman.radius < 0) {
            pacman.direction.x = -pacman.direction.x;
        }

        if (pacman.y + pacman.radius > canvas.height || pacman.y - pacman.radius < 0) {
            pacman.direction.y = -pacman.direction.y;
        }
    }

    function gameLoop() {
        updatePacman();
        drawPacman();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}
