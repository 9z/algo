const [testCase, ...sentenses] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = sentenses.map(sentense => sentense.split(' ').map(word => word.split('').reverse().join('')).join(' ')).join('\n');
console.log(result);