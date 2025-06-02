// home.js - lógica da página inicial

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const modal = document.getElementById('modal');
    const continueBtn = document.getElementById('continueBtn');
    const playerNameInput = document.getElementById('playerName');
    const closeModalBtn = document.getElementById('closeModalBtn');

    startBtn.addEventListener('click', () => {
        modal.classList.add('show');
        playerNameInput.value = '';
        playerNameInput.focus();
    });

    continueBtn.addEventListener('click', () => {
        const name = playerNameInput.value.trim();
        if (name.length === 0) {
            playerNameInput.focus();
            playerNameInput.style.borderColor = '#e63946';
            return;
        }
        localStorage.setItem('marioPlayerName', name);
        window.location.href = 'index.html';
    });

    playerNameInput.addEventListener('input', () => {
        playerNameInput.style.borderColor = '#ccc';
    });

    playerNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            continueBtn.click();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
    }

    closeModalBtn.addEventListener('click', closeModal);

    // Fecha o modal ao clicar fora do conteúdo
    modal.addEventListener('mousedown', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
