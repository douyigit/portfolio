const fs = require('fs');

const answersStr = "1-B, 2-B, 3-B, 4-B, 5-B, 6-C, 7-B, 8-B, 9-B, 10-B, 11-B, 12-B, 13-C, 14-B, 15-B, 16-B, 17-B, 18-C, 19-B, 20-B, 21-C, 22-B, 23-B, 24-B, 25-B, 26-B, 27-B, 28-B, 29-B, 30-B, 31-B, 32-B, 33-A, 34-D, 35-B, 36-B, 37-B, 38-B, 39-B, 40-C, 41-B, 42-B, 43-B, 44-C, 45-B, 46-C, 47-D, 48-C, 49-B, 50-C, 51-C, 52-B, 53-B, 54-C, 55-B, 56-B, 57-B, 58-B, 59-B, 60-B, 61-C, 62-C, 63-C, 64-A, 65-B, 66-B, 67-A, 68-B, 69-B, 70-C, 71-C, 72-B, 73-B, 74-B, 75-B, 76-C, 77-B, 78-B, 79-B, 80-B, 81-B, 82-B, 83-B, 84-B, 85-B, 86-C, 87-B, 88-B, 89-B, 90-B, 91-B, 92-B, 93-B, 94-B, 95-B, 96-B, 97-B, 98-B, 99-B, 100-B, 101-D, 102-B, 103-B, 104-B, 105-B, 106-B, 107-B, 108-B, 109-B, 110-B, 111-B, 112-B, 113-B, 114-B, 115-B, 116-B, 117-B, 118-B, 119-B, 120-B, 121-B, 122-B, 123-C, 124-C, 125-B, 126-B, 127-B, 128-B, 129-B, 130-B, 131-B, 132-B, 133-B, 134-B, 135-B, 136-B, 137-B, 138-B, 139-B, 140-B, 141-B, 142-B, 143-C, 144-B, 145-B.";

// Parse answers into a map { "1": "B", "2": "B", ... }
const answersMap = {};
answersStr.replace(/\./g, '').split(',').forEach(item => {
    const parts = item.trim().split('-');
    if (parts.length === 2) {
        answersMap[parts[0].trim()] = parts[1].trim();
    }
});

let dataFile = fs.readFileSync('data.js', 'utf8');

global.appData = undefined;
eval(dataFile.replace('const appData', 'global.appData'));

const siberQuestions = global.appData.sibergiris1;

let updatedQuestions = siberQuestions.map((q, index) => {
    const realId = (index + 1).toString();
    q.id = realId;
    if (answersMap[realId]) {
        q.answer = answersMap[realId];
    }
    return q;
});

global.appData.sibergiris1 = updatedQuestions;

const newDataContent = `const appData = ${JSON.stringify(global.appData, null, 2)};\n`;

fs.writeFileSync('data.js', newDataContent, 'utf8');
console.log('Successfully updated data.js with correct answers and fixed IDs.');
