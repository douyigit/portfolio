const fs = require('fs');

function parseQuestions(rawText) {
    const questions = [];
    const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
    
    let currentQuestion = null;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Match question start like "1. Question text"
        const qMatch = line.match(/^(\d+)\.\s+(.*)/);
        if (qMatch) {
            if (currentQuestion) {
                questions.push(currentQuestion);
            }
            currentQuestion = {
                id: qMatch[1],
                text: qMatch[2],
                options: []
            };
            continue;
        }
        
        // Match options like "A) Option text" or "A. Option text"
        const optMatch = line.match(/^([A-Da-d])[\)\.]\s+(.*)/);
        if (optMatch && currentQuestion) {
            currentQuestion.options.push({
                key: optMatch[1].toUpperCase(),
                text: optMatch[2]
            });
            continue;
        }
        
        // If it's a continuation of previous question text
        if (currentQuestion && currentQuestion.options.length === 0) {
            currentQuestion.text += ' ' + line;
        } else if (currentQuestion && currentQuestion.options.length > 0) {
            // Continuation of an option
            currentQuestion.options[currentQuestion.options.length - 1].text += ' ' + line;
        }
    }
    
    if (currentQuestion) {
        questions.push(currentQuestion);
    }
    
    return questions;
}

function parseAnswers(ansText) {
    const answers = {};
    const lines = ansText.split('\n').map(l => l.trim()).filter(l => l);
    for (const line of lines) {
        const match = line.match(/^(\d+)[-\.](.*)/);
        if (match) {
            answers[match[1]] = match[2].trim();
        }
    }
    return answers;
}

const sunuRaw = fs.readFileSync('sunu_raw.txt', 'utf8');
const sunuAns = fs.readFileSync('SUNU CEVAP.txt', 'utf8');
const walkRaw = fs.readFileSync('walktrough_raw.txt', 'utf8');
const walkAns = fs.readFileSync('WALKTROUGH CEVAP.txt', 'utf8');

const sunuQuestions = parseQuestions(sunuRaw);
const sunuAnswers = parseAnswers(sunuAns);

const walkQuestions = parseQuestions(walkRaw);
const walkAnswers = parseAnswers(walkAns);

// Merge answers
sunuQuestions.forEach(q => {
    q.answer = sunuAnswers[q.id] || 'Bilinmiyor';
});

walkQuestions.forEach(q => {
    q.answer = walkAnswers[q.id] || 'Bilinmiyor';
});

const dataContent = `const appData = {
    sunu: ${JSON.stringify(sunuQuestions, null, 2)},
    walkthrough: ${JSON.stringify(walkQuestions, null, 2)}
};`;

fs.writeFileSync('data.js', dataContent);
console.log('data.js created successfully.');
