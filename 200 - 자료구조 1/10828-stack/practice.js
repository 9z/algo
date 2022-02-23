
const stack = [];
let top = 0;

const cmd = {
    push: (int) => {
        stack[top++] = int;
        return;
    },
    pop: () => top == 0 ? -1 : stack[top-- - 1],
    size: () => top,
    empty: () => top === 0 ? 1 : 0,
    top: () => top === 0 ? -1 : stack[top - 1],
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const inputs = [];
let result = '';

rl.on('line', (line) => {
    inputs.push(line);
}).on('close', () => {
    inputs.forEach(input => {
        const [command, int] = input.split(' ');
        if (int) {
            cmd[command](int);
            return;
        }
        if (command === 'pop' || command === 'size' || command === 'empty' || command === 'top') {
            result += cmd[command]() + '\n';
            return;
        }
        return;
    });
    console.log(result);
    process.exit();
});