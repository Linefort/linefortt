function createRose() {
    const rose = document.createElement('div');
    rose.innerHTML = '🌹';
    rose.className = 'rose';
    const startLeft = Math.random() * 100;
    const animationDelay = Math.random() * 5;
    const fontSize = 20 + Math.random() * 25;
    rose.style.left = `${startLeft}%`;
    rose.style.animationDelay = `${animationDelay}s`;
    rose.style.fontSize = `${fontSize}px`;
    document.getElementById('roses').appendChild(rose);
    setTimeout(() => rose.remove(), 15000);
}

window.addEventListener('load', () => {
    setInterval(createRose, 300);
});