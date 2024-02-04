var hasAudioPlayed = false;

function playRandomAudio() {
    if (!hasAudioPlayed) {
        var audioElement = document.getElementById("aud");
        var player = document.getElementById('s');
        var apple = Math.floor(Math.random() * 10) + 1;  // Generate a random number between 1 and 10

        if (apple === 1) {
            player.setAttribute("src", "res/fixed-as.mp3");
        } else if (apple === 2) {
            player.setAttribute("src", "res/fixed-bi.mp3");
        } else if (apple === 3) {
            player.setAttribute("src", "res/fixed-diaf.mp3");
        } else if (apple === 4) {
            player.setAttribute("src", "res/fnaf.mp3");
        } else if (apple === 5) {
            player.setAttribute("src", "res/fixed-g.mp3");
        } else if (apple === 6) {
            player.setAttribute("src", "res/fixed-gl.mp3");
        } else if (apple === 7) {
            player.setAttribute("src", "res/fixed-iheay.mp3");
        } else if (apple === 8) {
            player.setAttribute("src", "res/fixed-ite.mp3");
        } else if (apple === 9) {
            player.setAttribute("src", "res/fixed-sc.mp3");
        } else if (apple === 10) {
            player.setAttribute("src", "res/fixed-stiutk.mp3");
        }

        audioElement.load();  // Reload the audio element with the new source
        audioElement.play();  // Play the audio

        hasAudioPlayed = true;  // Set the flag to indicate that the audio has been played
    }
}

// Check if audio has played after a delay
setTimeout(function() {
    var audioElement = document.getElementById("aud");

    if (audioElement.readyState >= 2) {
        // Audio has played, do nothing
    } else {
        // Audio hasn't played, manually run the script
        playRandomAudio();
    }
}, 3000); // Adjust the delay (in milliseconds) as needed
