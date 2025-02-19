import { generateSequence } from './kreapelin.js';

const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');
const missDisplay = document.createElement('p');
missDisplay.id = 'miss';
missDisplay.textContent = 'Miss: 0';
document.querySelector('.game-container').appendChild(missDisplay);
const answerCountDisplay = document.createElement('p');
answerCountDisplay.id = 'answer-count';
answerCountDisplay.textContent = '現在の回答数/最大: : 0';
document.querySelector('.game-container').appendChild(answerCountDisplay);
const timerDisplay = document.getElementById('timerDisplay');
const endButton = document.getElementById('end-button');

let sequence = [];
let currentIndex = 0;
let score = 0;
let miss = 0;
let answerCount = 0;
let timer;
let timeLeft = 60;

startButton.addEventListener('click', startGame);
wordInput.addEventListener('input', checkInput);
endButton.addEventListener('click', endGame);

function startGame() {
    console.log('startGame');
    sequence = generateSequence();
    currentIndex = 0;
    score = 0;
    miss = 0;
    answerCount = 0;
    const maxAnswers = sequence.length - 1;
    scoreDisplay.textContent = `Score: ${score}`;
    missDisplay.textContent = `Miss: ${miss}`;
    answerCountDisplay.textContent = `現在の回答数/最大: ${answerCount}/${maxAnswers}`;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    wordInput.disabled = false;
    wordInput.value = '';
    wordInput.focus();
    startButton.disabled = true;
    timer = setInterval(updateTimer, 1000);
    nextPair();
}

function nextPair() {
    if (currentIndex < sequence.length - 1) {
        const element1 = sequence[currentIndex];
        const element2 = sequence[currentIndex + 1];
        wordDisplay.textContent = `${element1} + ${element2} = ?`;
        wordInput.value = '';
        currentIndex++;
    } else {
        endGame();
    }
}

function checkInput() {
    const element1 = sequence[currentIndex - 1];
    const element2 = sequence[currentIndex];
    const correctAnswer = (element1 + element2) % 10;
    if (parseInt(wordInput.value) === correctAnswer) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        miss++;
        missDisplay.textContent = `Miss: ${miss}`;
    }
    answerCount++;
    const maxAnswers = sequence.length - 1;
    answerCountDisplay.textContent = `現在の回答数/最大: ${answerCount}/${maxAnswers}`;
    nextPair();
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function endGame() {
    wordDisplay.textContent = 'Game Over! Press Start to play again.';
    wordInput.disabled = true;
    startButton.disabled = false;
    console.log('timer=', timer);
    clearInterval(timer);
}