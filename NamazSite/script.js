document.getElementById('myButton').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');

    // YouTube video URL
    video.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    // Show the video container
    videoContainer.style.display = 'block';
});
