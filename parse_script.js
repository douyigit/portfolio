const fs = require('fs');
const content = fs.readFileSync('Sorular ve Cevaplar.txt', 'utf8');

let fullText = content.replace(/\r?\n|\f/g, ' ');

// Extract answer key
const ansRegex = /(\d+)\s*-\s*([A-D])/gi;
const answers = {};
let matchAns;
while ((matchAns = ansRegex.exec(fullText)) !== null) {
    if (parseInt(matchAns[1]) <= 100) {
        answers[matchAns[1]] = matchAns[2].toUpperCase();
    }
}

// Find where answer key starts to ignore it for questions
const firstAnsIndex = fullText.search(/(?:1-B\s*,)/);
if(firstAnsIndex !== -1) {
    fullText = fullText.substring(0, firstAnsIndex);
}

// Remove BÖLÜM headers
fullText = fullText.replace(/BÖLÜM \d+:[^0-9]+/g, ' ');

const questionsList = [];
// Match "1. " up to next number dot
const qRegex = /(\d+)\.\s+(.*?)(?=\s+\d+\.\s+|$)/g;

let matchQ;
while ((matchQ = qRegex.exec(fullText)) !== null) {
    let id = matchQ[1];
    let meat = matchQ[2];
    
    const optRegex = /([A-D])\)\s*(.*?)(?=\s+[A-D]\)\s*|$)/g;
    let parts = meat.split(/(?:[A-D]\)\s*)/);
    let text = parts[0].trim();
    
    let options = [];
    let optMatch;
    while ((optMatch = optRegex.exec(meat)) !== null) {
        options.push({
            key: optMatch[1].toUpperCase(),
            text: optMatch[2].trim()
        });
    }
    
    if (options.length > 0) {
        questionsList.push({
            id: id,
            text: text,
            options: options,
            answer: answers[id] || 'Bilinmiyor'
        });
    }
}

console.log("Parsed", questionsList.length, "questions");
console.log("Example:", questionsList[0]);

let dataJs = fs.readFileSync('data.js', 'utf8');
if(!dataJs.includes('appData.bilgiguvenligi')){
    dataJs += `\nappData.bilgiguvenligi = ${JSON.stringify(questionsList, null, 2)};\n`;
    fs.writeFileSync('data.js', dataJs);
    console.log("Updated data.js");
} else {
    console.log("data.js already contains bilgiguvenligi");
}
