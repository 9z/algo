const reverseWords = (sentense) => {
    const splitedSentense = sentense.split(' ');
    let result = '';

    splitedSentense.forEach(word => {
        for (let i = word.length; i > 0; i--) {
            result += word[i - 1];
        }
        result += ' ';
        return;
    });

    return result;
};

const rl = require('readline');
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputs = [];
let result = '';

readline.on('line', (line) => {
    inputs.push(line);
}).on('close', () => {
    inputs.forEach((input, index) => {
        if (index === 0) {
            return;
        }
        result += reverseWords(input) + '\n';
    });

    console.log(result);
    process.exit();
});