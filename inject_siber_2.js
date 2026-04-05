const fs = require('fs');

const dataFile = 'data.js';
const jsonDataFile = 'siber_giris_2_parsed.json';

let dataContent = fs.readFileSync(dataFile, 'utf8');
const newQuestions = fs.readFileSync(jsonDataFile, 'utf8');

// Find the last "]" followed by "};" in data.js to inject the new key.
// The file ends with:
//     }
//   ]
// };

// Replace the end of the file with the new key
if (dataContent.endsWith('}\n  ]\n};')) {
    dataContent = dataContent.replace(/}\n  \]\n};$/, '}\n  ],\n  "siber_giris_2": ' + newQuestions.replace(/\n/g, '\n  ') + '\n};');
} else if (dataContent.endsWith('}\r\n  ]\r\n};')) {
    dataContent = dataContent.replace(/}\r\n  \]\r\n};$/, '}\r\n  ],\r\n  "siber_giris_2": ' + newQuestions.replace(/\n/g, '\r\n  ') + '\r\n};');
} else {
    // try a more regex-based approach
    dataContent = dataContent.replace(/(\s*\]\s*\}\s*;?\s*)$/s, ',\n  "siber_giris_2": ' + newQuestions + '\n};');
}

fs.writeFileSync(dataFile, dataContent, 'utf8');
console.log('Appended siber_giris_2 to data.js');
