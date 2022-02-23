const stack = [];

const isVPS = (sentence) => {
    const stack = [];
    for (const character of sentence) {
        if (character === '(') {
            stack.push(character);
        }

        if (character === ')') {
            if (stack.length === 0) {
                return 'NO';
            }

            stack.pop();
        }
    };

    if (stack.length === 0) {
        return 'YES';
    }

    return 'NO';
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

        result += isVPS(input) + '\n';
    });

    console.log(result);
    process.exit();
});