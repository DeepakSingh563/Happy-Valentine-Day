function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 300);

function moveButton() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}