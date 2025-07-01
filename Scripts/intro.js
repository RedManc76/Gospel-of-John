document.addEventListener('DOMContentLoaded', function () {
    const videoBackground = document.querySelector('.video-background');
    const promoButton = document.getElementById('promo-banner');
    const introButton = document.getElementById('intro-banner');
    const videoCover = document.querySelector('.video-cover');
    const promoVideo = document.querySelector('.promo-video');

    promoButton.addEventListener('click',  async function(evt) {
        videoBackground.src = './Images/video_block.png';
        videoCover.style.zIndex = '-1';
        promoVideo.style.zIndex = '3';
        try {
            promoVideo.play()
            const lite_youtube = document.querySelectorAll('lite-youtube');
            const lite_youtube_player = lite_youtube[0];         
            if (lite_youtube_player) {
                const player = await lite_youtube_player.getYTPlayer();
                player.pauseVideo();
            } else {
                console.error('Lite YouTube players not found.');
            }
        } catch (error) {
            console.error('Error accessing Lite YouTube player:', error);
        }
    });

    introButton.addEventListener('click',  async function(evt) {
        videoBackground.src = './Images/purple_video_block.png';
        videoCover.style.zIndex = '-1';
        promoVideo.style.zIndex = '-1';
        try {
            promoVideo.pause()
            const lite_youtube = document.querySelectorAll('lite-youtube');
            const lite_youtube_player = lite_youtube[0];         
            if (lite_youtube_player) {
                const player = await lite_youtube_player.getYTPlayer();
                player.playVideo();
            } else {
                console.error('Lite YouTube players not found.');
            }
        } catch (error) {
            console.error('Error accessing Lite YouTube player:', error);
        }
    });
});