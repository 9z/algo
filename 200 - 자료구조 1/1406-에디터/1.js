const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputs = [];

let words;
let input_commands;

const stack = [];

const commands = {
    'L': () => {
        if (words.length !== 0) {
            stack.push(words.pop());
        }
        return;
    },
    'D': () => {
        if (stack.length !== 0) {
            words.push(stack.pop());
        }
    },
    'B': () => {
        if (words.length !== 0) {
            words.pop();
        }
        return;
    },
    'P': (character) => {
        words.push(character);
    },
};

rl.on('line', (line) => {
    inputs.push(line);
}).on('close', () => {
    words = Array.from(inputs[0]);
    input_commands = inputs.slice(2);
    for (const command of input_commands) {
        if (command.split(' ')[0] === 'P') {
            commands[command.split(' ')[0]](command.split(' ')[1]);
        } else {
            commands[command]();
        }
    }
    console.log(words.join('') + stack.reverse().join(''));
    process.exit();
});