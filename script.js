// Boobies :3 (.) (.)
// Rawr xD || UwU || OwO

// And No, This Isn't AI Generated Either, I Am Actually More Awake Lol.

// Variables
const musiclist = [
    "aito.mp3", // Astronaut In The Ocean - Gura?
    "as.mp3", // All Star - Mix
    "bal.mp3", // Boys A Liar - Biden/Obama
    "Ball.mp3", // Ballin' - Spongebob, Patrick, Squidward, Mr Krabs
    "beg.mp3", // Begging - Plankton
    "bi.mp3", // Big Iron - Hank Hill
    "CG.mp3", // Credit To Stiizzy :3 || Fuck OperaGX
    "diaf.mp3", // Die In A Fire - Squidward
    "ec.mp3", // Eric Cartman Or Whatever, I Dont Watch South Park Lmao
    "fim.mp3", // Friend In Me - Frank
    "fnaf.mp3", // Tombstone FNaF Song - Frank
    "gary.mp3", // Gary Come Home - Juice WRLD
    "gl.mp3", // Get Lucky - Peter, Spongebob, Mordecai (?)
    "hoaf.mp3", // Hooked On A Feeling - Squidward
    "ibsl.mp3", // FNaF Song - Frank
    "iheay.mp3", // I Hate Everything About You - Plankton
    "ite.mp3", // In The End - Spongebob, Peter
    "sc.mp3", // Sweet Caroline - Squidward
    "stiutk.mp3", // Somebody That I Use To Know - Mordecai
    "lucid.mp3", // Lucid Dreams - Squidward
    "liah.mp3", // Life Is A Highway - Plankton
    // "thrill.mp3" // Thriller - Mr Krabs [Shitty Quality]
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
