const fs = require('fs');
const dataFile = 'data.js';
const jsonDataFile = 'document_9_parsed.json';

let dataContent = fs.readFileSync(dataFile, 'utf8');
const newQuestions = fs.readFileSync(jsonDataFile, 'utf8');

if (dataContent.endsWith('}\n  ]\n};')) {
    dataContent = dataContent.replace(/}\n  \]\n};$/, '}\n  ],\n  "veri_iletisimi": ' + newQuestions.replace(/\n/g, '\n  ') + '\n};');
} else if (dataContent.endsWith('}\r\n  ]\r\n};')) {
    dataContent = dataContent.replace(/}\r\n  \]\r\n};$/, '}\r\n  ],\r\n  "veri_iletisimi": ' + newQuestions.replace(/\n/g, '\r\n  ') + '\r\n};');
} else {
    dataContent = dataContent.replace(/(\s*\]\s*\}\s*;?\s*)$/s, ',\n  "veri_iletisimi": ' + newQuestions + '\n};');
}

fs.writeFileSync(dataFile, dataContent, 'utf8');
console.log('Appended veri_iletisimi to data.js');
