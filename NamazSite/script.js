document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');

    playButton.addEventListener('click', () => {
        // Videoyu embed linkine ayarla
        videoPlayer.src = 'https://www.youtube.com/watch?v=AuKR2fQbMBkautoplay.';
        // Video konteynerini görünür yap
        videoContainer.classList.remove('hidden');
    });
});
