// This file contains the JavaScript code for the real-time typing practice application.

const textDisplay = document.getElementById('text-display');
const userInput = document.getElementById('user-input');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const resultDisplay = document.getElementById('result');

const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "In the middle of difficulty lies opportunity."
];

let currentText = '';
let startTime;
let timer;

function startTypingTest() {
    reset();
    currentText = texts[Math.floor(Math.random() * texts.length)];
    textDisplay.textContent = currentText;
    userInput.value = '';
    userInput.focus();
    startTime = new Date().getTime();
    timer = setInterval(updateResult, 100);
}

function reset() {
    clearInterval(timer);
    resultDisplay.textContent = '';
    userInput.value = '';
    userInput.disabled = false;
}

function updateResult() {
    const typedText = userInput.value;
    const correctText = currentText.substring(0, typedText.length);
    
    if (typedText === currentText) {
        clearInterval(timer);
        const timeTaken = (new Date().getTime() - startTime) / 1000;
        resultDisplay.textContent = `Well done! You finished in ${timeTaken} seconds.`;
        userInput.disabled = true;
    } else if (typedText !== correctText) {
        userInput.classList.add('error');
    } else {
        userInput.classList.remove('error');
    }
}

startBtn.addEventListener('click', startTypingTest);
resetBtn.addEventListener('click', reset);