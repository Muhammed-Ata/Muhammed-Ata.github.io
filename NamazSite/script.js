document.getElementById('playButton').addEventListener('click', function() {
    var videoOverlay = document.getElementById('videoOverlay');
    var videoFrame = document.getElementById('videoFrame');
    
    videoFrame.src = "https://www.youtube.com/embed/PayvWj2piKg?autoplay=1";
    videoOverlay.style.display = 'flex';
});

document.getElementById('videoOverlay').addEventListener('click', function() {
    var videoOverlay = document.getElementById('videoOverlay');
    var videoFrame = document.getElementById('videoFrame');
    
    videoFrame.src = "";
    videoOverlay.style.display = 'none';
});
