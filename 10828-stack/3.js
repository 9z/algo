/**
 * topIndex를 사용하는 버전
 */
const stack = [];
let topIndex = 0;

const cmd = {
    push: (int) => {
        stack[topIndex++] = int;
    },
    pop: () => {
        if (stack.length === 0) {
            return -1;
        }
        const popValue = stack.pop();
        --topIndex;
        return popValue;
    },
    size: () => topIndex,
    empty: () => topIndex ? 0 : 1,
    top: () => topIndex ? stack[topIndex - 1] : -1,
};


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = '';
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    input.map(line => {
        const command = line.split(' ');
        if (command[0] === 'push') {
            cmd['push'](command[1]);
        }

        if (command[0] === 'pop' || command[0] === 'size' || command[0] === 'empty' || command[0] === 'top') {
            result += cmd[command[0]]() + '\n';
        }
    });
    console.log(result);
    process.exit();
});