const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Pontuação e High Score
let score = 0;
let highScore = localStorage.getItem('marioHighScore') || 0;
let gameActive = true;
let pipeSpeed = 1.5; // segundos

// Cria placar na tela
const scoreBoard = document.createElement('div');
scoreBoard.className = 'score-board';
scoreBoard.innerHTML = `<img src="mario-jump-images/star.png" alt="score" style="vertical-align:middle;width:32px;height:32px;margin-right:8px;"> Score: <span id="score">0</span> | High Score: <span id="high-score">${highScore}</span>`;
document.body.appendChild(scoreBoard);

// Botão de reiniciar
const restartBtn = document.createElement('button');
restartBtn.className = 'restart-btn';
restartBtn.innerText = 'Reiniciar';
restartBtn.style.display = 'none';
restartBtn.onclick = () => window.location.reload();
document.body.appendChild(restartBtn);

// Função de pulo
const jump = () => {
    if (!gameActive) return;
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Loop principal
let frameCount = 0;
const loop = setInterval(() => {
    if (!gameActive) return;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // Colisão com pipe
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './mario-jump-images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        gameActive = false;
        restartBtn.style.display = 'block';
        if (score > highScore) {
            localStorage.setItem('marioHighScore', score);
            document.getElementById('high-score').innerText = score;
        }
        clearInterval(loop);
        return;
    }
    // Score contínuo (distância) - incrementa a cada 100ms
    frameCount++;
    if (frameCount % 10 === 0) { // 10 x 10ms = 100ms
        score++;
        document.getElementById('score').innerText = score;
    }
    // Mantém velocidade do pipe sempre igual
    pipe.style.animationDuration = `${pipeSpeed}s`;
}, 10);

document.addEventListener('keydown', jump);