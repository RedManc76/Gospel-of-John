
function getTimeInSeconds(time_string) {
    var timeParts = time_string.split(':');

    if (timeParts.length !== 2) {
        // Invalid time format
        console.error('Invalid time format. Expected "m:ss".');
        return 0;
    }

    // Extract minutes and seconds
    var minutes = parseInt(timeParts[0], 10);
    var seconds = parseInt(timeParts[1], 10);

    if (isNaN(minutes) || isNaN(seconds)) {
        // Invalid numeric values
        console.error('Invalid numeric values for minutes or seconds.');
        return 0;
    }

    // Calculate total seconds
    var totalSeconds = minutes * 60 + seconds;
    return totalSeconds;
}

document.addEventListener('DOMContentLoaded', function () {

    const openBanner = document.querySelector(".open-banner");
    const bibleBanner = document.querySelector(".bible-banner");
    const commentaryBanner = document.querySelector(".commentary-banner");
    const meditationBanner = document.querySelector(".meditation-banner");
    const closeBanner = document.querySelector(".close-banner");
    const studyBanner = document.querySelector(".study-banner");
    const sermonBanner = document.querySelector(".sermon-banner");

    const chapter_buttons = document.querySelectorAll('.chapter-link-text');
    const study_buttons = document.querySelectorAll('.study-link-text');
    const sermon_buttons = document.querySelectorAll('.sermon-link-text');

    chapter_buttons.forEach((button, index) => {
        button.addEventListener('click', async function (evt) {
            console.log("index:", 'chapter_' + (index + 1) + '_time');
            const seekTime = getTimeInSeconds(window['chapter_' + (index + 1) + '_time']);
            if (seekTime) {
                try {
                    const lite_youtube = document.querySelectorAll('lite-youtube');
                    const lite_youtube_player = lite_youtube[0];
                    if (lite_youtube_player) {
                        const player = await lite_youtube_player.getYTPlayer();
                        player.seekTo(seekTime);
                    } else {
                        console.error('Lite YouTube players not found.');
                    }
                } catch (error) {
                    console.error('Error accessing Lite YouTube player:', error);
                }
            }
        });
    });

    study_buttons.forEach((button, index) => {
        const link = window['study_link' + (index + 1)];
        if (link) {
            button.addEventListener('click', () => {
                window.open(link, '_blank');
            });
        }
    });

    sermon_buttons.forEach((button, index) => {
        const link = window['sermon_link' + (index + 1)];
        if (link) {
            button.addEventListener('click', () => {
                window.open(link, '_blank');
            });
        }
    });

});

