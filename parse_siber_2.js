const fs = require('fs');

const rawData = fs.readFileSync('siber_giris_2_raw.txt', 'utf8');

// The answer key is at the bottom, format: CEVAP ANAHTARI (60 SORU)\n1-B, 2-C...
const answerSection = rawData.split('CEVAP ANAHTARI')[1];
const answerMatches = [...answerSection.matchAll(/(\d+)-([A-E])/g)];
const answers = {};
answerMatches.forEach(m => {
    answers[m[1]] = m[2];
});

const questionsSection = rawData.split('CEVAP ANAHTARI')[0];

const questions = [];
// Match patterns like "1. Question text...? \nA) ...\nB) ...\nC) ...\n...
const qRegex = /(?:\n|^)(\d+)\.\s*(.*?)(?=(?:\n\d+\.)|$)/gs;
let match;

while ((match = qRegex.exec(questionsSection)) !== null) {
    const id = match[1];
    let body = match[2].trim();
    
    // Split into question text and options
    const optionRegex = /([A-E])\)\s*(.*?)(?=(?:\n[A-E]\))|$)/gs;
    
    // We need to separate the main text from the first option.
    const firstOptionMatch = /A\)\s*/.exec(body);
    let questionText = body.substring(0, firstOptionMatch.index).trim();
    let optionsText = body.substring(firstOptionMatch.index);
    
    let optionsMatches = [...optionsText.matchAll(optionRegex)];
    let options = optionsMatches.map(o => ({
        key: o[1],
        text: o[2].trim()
    }));
    
    questions.push({
        id: id,
        text: questionText,
        options: options,
        answer: answers[id] || 'UNKNOWN'
    });
}

const outputPath = 'siber_giris_2_parsed.json';
fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Parsed ${questions.length} questions into ${outputPath}`);
