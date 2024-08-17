// script.js
document.getElementById('playButton').addEventListener('click', function() {
    var iframe = document.getElementById('myVideo');
    var videoContainer = document.getElementById('video-container');
    
    // YouTube video URL
    var videoUrl = "https://www.youtube.com/embed/AuKR2fQbMB";

    // Show the video container and set the src of the iframe
    videoContainer.style.display = 'block';
    iframe.src = videoUrl;
    
    // Change button text to something else
    this.textContent = 'Videoyu Duraklat';
    
    // Optional: Disable button after playing the video
    this.disabled = true;
});
