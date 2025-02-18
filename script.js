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
answerCountDisplay.textContent = 'Answers: 0';
document.querySelector('.game-container').appendChild(answerCountDisplay);

let sequence = [];
let currentIndex = 0;
let score = 0;
let miss = 0;
let answerCount = 0;

startButton.addEventListener('click', startGame);
wordInput.addEventListener('input', checkInput);

function startGame() {
    console.log('startGame');
    sequence = generateSequence();
    currentIndex = 0;
    score = 0;
    miss = 0;
    answerCount = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    missDisplay.textContent = `Miss: ${miss}`;
    answerCountDisplay.textContent = `Answers: ${answerCount}`;
    wordInput.disabled = false;
    wordInput.value = '';
    wordInput.focus();
    startButton.disabled = true;
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
    answerCountDisplay.textContent = `Answers: ${answerCount}`;
    nextPair();
}

function endGame() {
    wordDisplay.textContent = 'Game Over! Press Start to play again.';
    wordInput.disabled = true;
    startButton.disabled = false;
}