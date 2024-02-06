// Boobies :3 (.) (.)
// Rawr xD || UwU || OwO

// And No, This Isn't AI Generated Either, I Am Actually More Awake Lol.

// Variables
const musiclist = [
    "aito.mp3",
    "as.mp3",
    "bal.mp3",
    "Ball.mp3",
    "beg.mp3",
    "bi.mp3",
    "biyj.mp3",
    "CG.mp3",
    "diaf.mp3",
    "ec.mp3",
    "fim.mp3",
    "fnaf.mp3",
    "gary.mp3",
    "gl.mp3",
    "hoaf.mp3",
    "ibsl.mp3",
    "iheay.mp3",
    "ite.mp3",
    "sc.mp3",
    "stiutk.mp3"
  ];
  
const player = document.getElementById("audio");
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
    player.play();
});

// On Loaded
document.addEventListener("DOMContentLoaded", loaded);
