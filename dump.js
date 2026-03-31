const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('sunu.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('sunu_raw.txt', data.text);
    console.log('sunu.pdf length:', data.text.length);
}).catch(console.error);

let dataBuffer2 = fs.readFileSync('walktrough.pdf');
pdf(dataBuffer2).then(function(data) {
    fs.writeFileSync('walktrough_raw.txt', data.text);
    console.log('walktrough.pdf length:', data.text.length);
}).catch(console.error);
