const validNumbers = [3, 4, 5, 6, 7, 8, 9];
const sequenceLength = 116;
const blockSize = 5;

function generateSequence() {
    let sequence = [];
    while (sequence.length < sequenceLength) {
        let num = getRandomNumber();
        if (isValidNextNumber(sequence, num)) {
            sequence.push(num);
        }
    }
    return sequence;
}

function getRandomNumber() {
    return validNumbers[Math.floor(Math.random() * validNumbers.length)];
}

function isValidNextNumber(sequence, num) {
    const len = sequence.length;
    if (len > 0 && sequence[len - 1] === num) return false;
    if (len > 1 && sequence[len - 2] === num) return false;
    if (len >= blockSize && !isValidBlock(sequence.slice(len - blockSize + 1).concat(num))) return false;
    return true;
}

function isValidBlock(block) {
    let hasSum10OrLess = false;
    let hasSum15OrLess = false;
    for (let i = 0; i < block.length - 1; i++) {
        const sum = block[i] + block[i + 1];
        if (sum <= 10) hasSum10OrLess = true;
        if (sum <= 15) hasSum15OrLess = true;
    }
    return hasSum10OrLess || hasSum15OrLess;
}