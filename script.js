const intro = document.getElementById("intro");
const love = document.getElementById("love");
const moon = document.getElementById("moon");
const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");

let timerLove;

function show(screen) {
    [intro, love, moon].forEach(function(item) {
        item.classList.remove("active");
    });
    screen.classList.add("active");
}

function createFloatingWords(container) {
    const positions = [
        ["w1", false], ["w2", true], ["w3", false], ["w4", true],
        ["w5", false], ["w6", true], ["w7", false], ["w8", true]
    ];

    positions.forEach(function(item) {
        const span = document.createElement("span");
        span.className = "floating-word " + item[0] + (item[1] ? " pink" : "");
        span.textContent = "I LOVE YOU";
        container.appendChild(span);
    });
}

createFloatingWords(document.querySelector("#love .floating-words"));
createFloatingWords(document.querySelector("#moon .moon-words"));

function startShow() {
    clearTimeout(timerLove);
    show(love);

    // Khoảng 7 giây cho phần I LOVE YOU.
    timerLove = setTimeout(function() {
        show(moon);
    }, 7000);
}

openBtn.addEventListener("click", startShow);

replayBtn.addEventListener("click", function() {
    clearTimeout(timerLove);
    show(intro);
});
