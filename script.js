const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');

const words = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let currentWord = '';
let score = 0;
let gameInterval;

startButton.addEventListener('click', startGame);
wordInput.addEventListener('input', checkInput);
wordInput.addEventListener('keydown', restrictInput);

function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    wordInput.disabled = false;
    wordInput.value = '';
    wordInput.focus();
    startButton.disabled = true;
    nextWord();
    gameInterval = setInterval(nextWord, 5000);
}

function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
    wordInput.value = '';
}

function checkInput() {
    if (wordInput.value === currentWord) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        nextWord();
    }
}

function restrictInput(event) {
    const key = event.key;
    if (!/^[0-9]$/.test(key) && key !== 'Backspace') {
        event.preventDefault();
    }
}

function endGame() {
    clearInterval(gameInterval);
    wordDisplay.textContent = 'Game Over! Press Start to play again.';
    wordInput.disabled = true;
    startButton.disabled = false;
}