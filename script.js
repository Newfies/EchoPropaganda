// Boobies :3 (.) (.)
// Rawr xD || UwU || OwO

// Variables
const musiclist = ["x", "y", "z"];
const player = document.getElementById("media");
const prewebs = document.getElementById("preweb");
const enter = document.getElementById("enterbtn");
const webs = document.getElementById("web");

// Functions
function loaded() {
    // What Site Will Run
    pickMusic();
}

function pickMusic() {
    var RNG = Math.floor(Math.random() * musiclist.length); // RNG? Whats RNG? RANDOM NUMBER GENERATOR, YAYAAAYAYAYA ~(OwO)~
    playMusic(RNG);
}

function playMusic(RNG) {
    player.setAttribute("src", "music/" + musiclist[RNG]);
}

// On Clickies ~(^w^)~
enter.addEventListener("click", function(){
    prewebs.style.display = "none";
    webs.style.display = "block";
});

// On Loaded
document.addEventListener("DOMContentLoaded", loaded);