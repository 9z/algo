const stack = [];
let top = 0;

const command = {
    push: (int) => {
        stack[top++] = int;
        return;
    },
    pop: () => {
        if (top === 0) {
            return -1;
        }
        const int = stack[top-- - 1];
        stack.splice(-1, 1);
        return int;
    },
    size: () => top,
    empty: () => top === 0 ? 1 : 0,
    top: () => top === 0 ? -1 : stack[top - 1]
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const inputs = [];
let results = '';

rl.on('line', (line) => {
    inputs.push(line);
}).on('close', () => {
    inputs.forEach(input => {
        const [cmd, int] = input.split(' ');
        const inputCommand = command[cmd];
        if (inputCommand) {
            if (cmd === 'push') {
                return inputCommand(int);
            }
            results += inputCommand() + '\n';
        }
        return;
    });

    console.log(results);
    process.exit();
});