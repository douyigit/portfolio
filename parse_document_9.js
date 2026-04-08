const fs = require('fs');

const rawData = fs.readFileSync('document_9_raw.txt', 'utf8');

// The answer key is at the bottom.
// We can find the answers by extracting everything after question 220 or so, but let's just use regex on the whole raw text 
// looking for \b(\d{1,3})-([A-D])\b
const answersMatches = [...rawData.matchAll(/\b(\d{1,3})-([A-D])\b/g)];
const answers = {};
answersMatches.forEach(m => {
    answers[m[1]] = m[2];
});

// Since the answer key format starts appearing near the end, and we don't want to parse answers as questions,
// we will split the text to isolate questions.
// The last question is 220, so we can split by "220-B" or just ignore text after "1-B | 2-B"
const splitIdx = rawData.indexOf('1-B | 2-B');
const questionsSectionOriginal = splitIdx !== -1 ? rawData.substring(0, splitIdx) : rawData;

// Now let's simplify newlines and weird spaces
const questionsSection = questionsSectionOriginal.replace(/\s+/g, ' ');

const questions = [];
// Match patterns like "1. Question text...? A) ... B) ... C) ... D) ..."
// We'll split by finding \b\d+\. 
const qSplitRegex = /(?=\b\d+\.\s)/g;
const qParts = questionsSection.split(qSplitRegex);

qParts.forEach(part => {
    const qMatch = part.match(/^(\d+)\.\s+(.*)/);
    if (!qMatch) return;
    
    const id = qMatch[1];
    let body = qMatch[2];
    
    // Now split the body by options A), B), C), D)
    const optionsRegex = /\s+([A-D])\)\s+/g;
    const optionMatches = [...body.matchAll(optionsRegex)];
    
    if (optionMatches.length === 0) return;
    
    let questionText = body.substring(0, optionMatches[0].index).trim();
    let options = [];
    
    for (let i = 0; i < optionMatches.length; i++) {
        const key = optionMatches[i][1];
        const start = '+'.length; // just a placeholder
        const textStart = optionMatches[i].index + optionMatches[i][0].length;
        const textEnd = i + 1 < optionMatches.length ? optionMatches[i+1].index : body.length;
        const oText = body.substring(textStart, textEnd).trim();
        
        options.push({
            key: key,
            text: oText
        });
    }
    
    // Ensure exactly 4 options
    const requiredKeys = ['A', 'B', 'C', 'D'];
    requiredKeys.forEach(k => {
        if (!options.find(o => o.key === k)) {
            options.push({ key: k, text: 'Bilinmiyor/Eksik' });
        }
    });
	options.sort((a,b) => a.key.localeCompare(b.key));
	
    // Exclude question 202 and any others that seem irrelevant
    if (id === "202" || questionText.includes("dersin adı") || questionText.includes("kalan sayısı")) {
        return; // skip
    }
    
    questions.push({
        id: id,
        text: questionText,
        options: options,
        answer: answers[id] || 'UNKNOWN'
    });
});

const outputPath = 'document_9_parsed.json';
fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Parsed ${questions.length} questions into ${outputPath}`);
