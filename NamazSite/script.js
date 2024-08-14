document.getElementById('showVideo').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');
    
    // YouTube video URL'sini buraya ekleyin. Aşağıdaki URL'yi rick roll video URL'si ile değiştirebilirsiniz.
    video.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Rick Roll video URL'si
    videoContainer.classList.remove('hidden');
});
