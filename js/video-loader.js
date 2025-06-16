document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    if (!video) {
        console.warn('Video element not found');
        return;
    }
    
    // Ensure video plays on mobile devices
    video.play().catch(function(error) {
        console.log('Video autoplay failed:', error);
        // Fallback: try to play on user interaction
        document.addEventListener('click', function() {
            video.play();
        }, { once: true });
    });
    
    // Optional: Pause video when page is not visible (saves bandwidth)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            video.pause();
        } else {
            video.play().catch(function(error) {
                console.log('Video play failed:', error);
            });
        }
    });
    
    // Handle video loading errors
    video.addEventListener('error', function(e) {
        console.error('Video failed to load:', e);
        // Add fallback background
        const videoBackground = document.querySelector('.video-background');
        if (videoBackground) {
            videoBackground.classList.add('fallback');
        }
    });
    
    // Optional: Log when video is ready
    video.addEventListener('loadeddata', function() {
        console.log('Video loaded successfully');
    });
    
    // Optional: Preload video for better performance
    video.addEventListener('canplaythrough', function() {
        console.log('Video can play through without buffering');
    });
});

