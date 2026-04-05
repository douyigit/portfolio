const fs = require('fs');
const d = fs.readFileSync('data.js', 'utf8');
const obj = eval(d + '\nappData');
console.log(Object.keys(obj));
