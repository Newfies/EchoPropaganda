// Fuck Me Dude
var hasAudioPlayed = false;

function playRandomAudio() {
    if (!hasAudioPlayed) {
        var audioElement = document.getElementById("aud");
        var player = document.getElementById('s');
        var apple = Math.floor(Math.random() * 10) + 1;

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

        audioElement.load();
        try {
            audioElement.play();
        } catch (error) {
            console.error("Error while playing audio:", error);
        }

        hasAudioPlayed = true;
    }
}

// Play audio when user clicks anywhere on the document
document.addEventListener("click", playRandomAudio);

// Rest of your script...

function addImageToDiv() {
    var divY = document.querySelector('.y');
    var imgElement = document.createElement('img');
    imgElement.className = 'xd';
    imgElement.src = 'res/xmr_hoodie.webp';
    divY.appendChild(imgElement);
}

setInterval(addImageToDiv, 50);

document.body.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    window.location.assign("index.html?fg");
});

document.body.addEventListener("mouseenter", function() {
    playRandomAudio();
});

document.body.addEventListener("click", function() {
    playRandomAudio();
});

document.body.addEventListener("mouseleave", function() {
    playRandomAudio();
});

document.body.addEventListener("onload`", function() {
    playRandomAudio();
});