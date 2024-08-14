document.getElementById('showVideoBtn').addEventListener('click', function() {
    const videoContainer = document.getElementById('videoContainer');
    const videoFrame = document.getElementById('videoFrame');
    
    // Video URL'nizi buraya ekleyin
    const videoURL = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
    
    // iframe src'ini ayarlayın ve container'ı gösterin
    videoFrame.src = videoURL;
    videoContainer.classList.remove('hidden');
});
