const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputs = [];
const getResult = () => {
    const result = [];
    const n = inputs[0];

    const stack = [];
    let input_n = 1;
    for (let i = 1; i <= n; i++) {
        stack.push(i);
        result.push('+');
        while (1) {
            if (parseInt(inputs[input_n]) === stack[stack.length - 1]) {
                stack.pop();
                result.push('-');
                ++input_n;
            } else if (parseInt(inputs[input_n]) !== stack[stack.length - 1]) {
                break;
            }
        }

        if (inputs[input_n] < i) {
            return 'NO';
        }

    }

    return result.join('\n');
};



rl.on('line', (line) => {
    inputs.push(line);
}).on('close', () => {

    const result = getResult();
    console.log(result);
    process.exit();
});