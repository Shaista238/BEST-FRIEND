function startSurprise() {
    const music = document.getElementById("bgMusic");
    music.play();

    document.getElementById("welcome").style.display = "none";
    document.getElementById("gift").style.display = "block";
}

function openGift() {

    document.getElementById("gift").innerHTML = `
        <div class="teddy">🧸</div>
        <h2>Hii BestU! 💖</h2>

        <p class="letter" id="letter"></p>

        <button id="finalBtn" onclick="showFinal()" style="display:none;">
            🌈 One Last Surprise
        </button>
    `;

    const text = `I made this little surprise just for you. 🌸

You always make my day a little brighter. 💖

I hope this makes you smile. 🥹

Thank you for being my BestU. 🎀✨`;

    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById("letter").innerHTML +=
                text.charAt(i) === "\n" ? "<br>" : text.charAt(i);

            i++;
            setTimeout(type, 40);
        } else {
            document.getElementById("finalBtn").style.display = "inline-block";
        }
    }

    type();
}

function showFinal() {

    document.body.innerHTML = `
        <div class="final">
            <div class="bigHeart">💗</div>

            <h1>For My BestU 🌸</h1>

            <p>
                Thank you for coming into my life. 🩷<br><br>

                I don't know what the future holds...<br>
                but I hope you'll always have a reason to smile. 🌷<br><br>

                You're truly special. 💖✨
            </p>

            <h2>🌸 Stay Happy, BestU 🌸</h2>
        </div>
    `;

}
setInterval(createHeart, 500);

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}