document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    if (!video) {
        return;
    }

    // Initialize video
    function initializeVideo() {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        
        // Try to play the video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(function(error) {
                showFallback();
            });
        }
    }

    // Event listeners
    video.addEventListener('loadeddata', function() {
        video.play().catch(function(error) {
            showFallback();
        });
    });

    video.addEventListener('error', function() {
        showFallback();
    });

    video.addEventListener('stalled', function() {
        showFallback();
    });

    // Show fallback background
    function showFallback() {
        const videoBackground = document.querySelector('.video-background');
        if (videoBackground) {
            videoBackground.classList.add('fallback');
        }
    }

    // Visibility change handler
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            video.pause();
        } else {
            video.play().catch(function(error) {
                // Silent fail
            });
        }
    });

    // Initialize everything
    initializeVideo();
});