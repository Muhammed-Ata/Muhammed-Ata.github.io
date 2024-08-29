document.getElementById('show-video-btn').addEventListener('click', function() {
    document.getElementById('video-overlay').classList.remove('hidden');
});

document.getElementById('close-video-btn').addEventListener('click', function() {
    document.getElementById('video-overlay').classList.add('hidden');
});
