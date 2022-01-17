const [caseCont, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = inputs.map(input => {
    return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}).join('\n');
console.log(result);