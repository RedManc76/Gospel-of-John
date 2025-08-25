
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
    
    const chapter_buttons = document.querySelectorAll('.chapter-link-banner');
    const study_buttons = document.querySelectorAll('.study-link-banner');
    const sermon_buttons = document.querySelectorAll('.sermon-link-banner');

    chapter_buttons.forEach(function(button) {
      button.addEventListener('click', async function(evt) {

        switch (this.id) {
        case 'chapter1':
            seekTime = getTimeInSeconds(chapter_1_time);
            break;
        case 'chapter2':
            seekTime = getTimeInSeconds(chapter_2_time);
            break;
        case 'chapter3':
            seekTime = getTimeInSeconds(chapter_3_time);
            break;
        case 'chapter4':
            seekTime = getTimeInSeconds(chapter_4_time);
            break;
        case 'chapter5':
            seekTime = getTimeInSeconds(chapter_5_time);
            break;
        case 'chapter6':
            seekTime = getTimeInSeconds(chapter_6_time);
            break;
        case 'chapter7':
            seekTime = getTimeInSeconds(chapter_7_time);
            break;

        default:
            seekTime = 0;
        }

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

      });
    });

    study_buttons.forEach(function(button) {
      button.addEventListener('click', function() {

        switch (this.id) {
        case 'Study1':
            window.open(study_link1, '_blank');
            break;
        case 'Study2':
            window.open(study_link2, '_blank');
            break;
        case 'Study3':
            window.open(study_link3, '_blank');
            break;
        case 'Study4':
            window.open(study_link4, '_blank');
            break;
        case 'Study5':
            window.open(study_link5, '_blank');
            break;
        case 'Study6':
            window.open(study_link6, '_blank');
            break;
        case 'Study7':
            window.open(study_link7, '_blank');
            break;
        case 'Study8':
            window.open(study_link8, '_blank');
            break;
        case 'Study9':
            window.open(study_link9, '_blank');
            break;
        case 'Study10':
            window.open(study_link10, '_blank');
            break;
        default:
        }
      });
    });

    sermon_buttons.forEach(function(button) {
      button.addEventListener('click', function() {

        switch (this.id) {
        case 'sermon1':
            window.open(sermon_link1, '_blank');
            break;
        case 'sermon2':
            window.open(sermon_link2, '_blank');
            break;
        case 'sermon3':
            window.open(sermon_link3, '_blank');
            break;
        case 'sermon4':
            window.open(sermon_link4, '_blank');
            break;
        case 'sermon5':
            window.open(sermon_link5, '_blank');
            break;
        case 'sermon6':
            window.open(sermon_link6, '_blank');
            break;
        case 'sermon7':
            window.open(sermon_link7, '_blank');
            break;
        case 'sermon8':
            window.open(sermon_link8, '_blank');
            break;
        case 'sermon9':
            window.open(sermon_link9, '_blank');
            break;
        case 'sermon10':
            window.open(sermon_link10, '_blank');
            break;
        default:
        }
      });
    });
  });

