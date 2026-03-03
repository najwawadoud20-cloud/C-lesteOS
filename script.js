let topZ = 20;

function openWin(id) {
const win = document.getElementById(id);
win.style.display = 'flex';

requestAnimationFrame(() => {
win.style.opacity = "1";
win.style.transform = "translate(-50%, -50%) scale(1)";
bringToFront(win);
});
}

function closeWin(id) {
document.getElementById(id).style.display = 'none';
}

function minimizeWin(id) {
document.getElementById(id).style.display = 'none';
}

function bringToFront(win) {
topZ++;
win.style.zIndex = topZ;
}

function evaporateWorry() {
const input = document.getElementById('worry-input');
const msg = document.getElementById('zen-message');

if (input.value.trim() === "") return;

input.style.transition = "all 2s ease-out";
input.style.transform = "translateY(-50px) scale(0)";
input.style.opacity = "0";

setTimeout(() => {
msg.innerText = "✨ Ta pensée est devenue un nuage. Respire.";
input.value = "";
input.style.transform = "scale(1)";
input.style.opacity = "1";
}, 2000);
}

function plantPixel() {
const zone = document.getElementById('art-zone');
const flora = ["🌸", "🌱", "🦋", "💖", "🍄"];
const item = document.createElement('div');

item.style.position = "absolute";
item.style.left = Math.random() * 90 + "%";
item.style.top = Math.random() * 80 + "%";
item.style.fontSize = Math.random() * 20 + 10 + "px";
item.innerText = flora[Math.floor(Math.random() * flora.length)];

zone.appendChild(item);
}

setInterval(() => {
const now = new Date();
document.getElementById('clock').innerText =
now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 1000);

document.querySelectorAll('.window').forEach(win => {
const header = win.querySelector('.window-header');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

header.addEventListener('mousedown', (e) => {
isDragging = true;
offsetX = e.clientX - win.offsetLeft;
offsetY = e.clientY - win.offsetTop;
bringToFront(win);
});

document.addEventListener('mousemove', (e) => {
if (!isDragging) return;
win.style.left = (e.clientX - offsetX) + 'px';
win.style.top = (e.clientY - offsetY) + 'px';
win.style.transform = "none";
});

document.addEventListener('mouseup', () => {
isDragging = false;
});
});

document.querySelectorAll('.window').forEach(win => {
win.addEventListener('mousedown', () => bringToFront(win));
});

const startBtn = document.getElementById('start-menu');
const startPanel = document.getElementById('start-panel');

startBtn.addEventListener('click', (e) => {
e.stopPropagation();
startPanel.style.display =
startPanel.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', () => {
startPanel.style.display = 'none';
});
