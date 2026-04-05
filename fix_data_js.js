const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// The error is around line 7433-7434 where siber_giris_2 was injected.
// We need to close the previous array sibergiris1.
// Looking at the previous output:
//      "answer": "B"
//    },
//  "siber_giris_2": [

// We need to change:
//    },
//  "siber_giris_2": [
// into:
//    }
//  ],
//  "siber_giris_2": [

// Let's use a regex that matches that specific junction.
// Note: The previous questions ended with "answer": "B"\n    },
// The regex should be precise.

const target = /"answer": "B"\s*\}\s*,\s*"siber_giris_2":\s*\[/;
// Wait, I should check if it was truly a comma or just a newline.
// My previous view showed }, then "siber_giris_2"

// Actually, I'll use a more generic fix: 
// Find the last item of sibergiris1 (which ended with id 145 and answer B)
// and make sure it is closed.

// Let's find the junction.
const junctionText = '    },\n  "siber_giris_2": [';
if (data.includes(junctionText)) {
    console.log('Found the broken junction, fixing...');
    data = data.replace(junctionText, '    }\n  ],\n  "siber_giris_2": [');
} else {
    // try with \r\n
    const junctionTextRN = '    },\r\n  "siber_giris_2": [';
    if (data.includes(junctionTextRN)) {
        console.log('Found the broken junction (CRLF), fixing...');
        data = data.replace(junctionTextRN, '    }\r\n  ],\r\n  "siber_giris_2": [');
    } else {
        console.log('Junction not found with exact match, trying regex...');
        data = data.replace(/\}\s*,\s*"siber_giris_2":\s*\[/s, '}\n  ],\n  "siber_giris_2": [');
    }
}

fs.writeFileSync('data.js', data, 'utf8');
console.log('Fix applied to data.js');

// Verify with a syntax check
try {
    const d = fs.readFileSync('data.js', 'utf8');
    eval(d + '\nif(typeof appData === "undefined") throw new Error("appData not defined");');
    console.log('Syntax check PASSED');
} catch (e) {
    console.log('Syntax check FAILED: ' + e.message);
    process.exit(1);
}
