document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("wait");
    const one = document.getElementById('one');
    const k = document.getElementById('k');
    const l = document.getElementById('l');
    const f = document.getElementById('foot');
    const f2 = document.getElementById('foot2');
    const o = document.getElementById("oo");

    btn.addEventListener("click", function(){
        console.log("Launching Nuke");
        btn.style.display = "none";
        one.style.display = "block";
        k.style.display = "block";
        l.style.display = "block";
        f.style.display = "block";
        f2.style.display = "block";
        o.style.display = "inline-block";
        launch()
    })
});


function launch(){

    var audioElement = document.getElementById("aud");
    var player = document.getElementById('s');
    var apple = Math.floor(Math.random() * 20) + 1;

    if (apple === 1) {
        player.setAttribute("src", "res/fixed-as.mp3");
    } else if (apple === 2) {
        player.setAttribute("src", "res/fixed-bi.mp3");
    } else if (apple === 3) {
        player.setAttribute("src", "res/fixed-diaf.mp3");
    } else if (apple === 4) {
        player.setAttribute("src", "res/fnaf.mp3");
    } else if (apple === 5) {
        player.setAttribute("src", "res/CG.mp3"); // Credit To My Darling Stiizzy
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
    } else if (apple === 11) {
        player.setAttribute("src", "res/hoaf.mp3");
    } else if (apple === 12) {
        player.setAttribute("src", "res/biyj.mp3");
    } else if (apple === 13) {
        player.setAttribute("src", "res/Ball.mp3");
    } else if (apple === 14) {
        player.setAttribute("src", "res/bal.mp3");
    } else if (apple === 15) {
        player.setAttribute("src", "res/beg.mp3"); // Credit To My Darling Stiizzy
    } else if (apple === 16) {
        player.setAttribute("src", "res/lucid.mp3");
    } else if (apple === 17) {
        player.setAttribute("src", "res/fim.mp3");
    } else if (apple === 18) {
        player.setAttribute("src", "res/ec.mp3");
    } else if (apple === 19) {
        player.setAttribute("src", "res/aito.mp3");
    } else if (apple === 20) {
        player.setAttribute("src", "res/gary.mp3");
    }

    audioElement.load();
    try {
        audioElement.play();
    } catch (error) {
        console.error("Error while playing audio:", error);
    }

    function addImageToDiv() {
        var divY = document.querySelector('.y');
        var imgElement = document.createElement('img');
        imgElement.className = 'xd';
        imgElement.src = 'res/xmr_hoodie.webp';
        divY.appendChild(imgElement);
    }

    setInterval(addImageToDiv, 50);
}