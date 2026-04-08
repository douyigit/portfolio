const fs = require('fs');

const dataFile = 'data.js';

let dataContent = fs.readFileSync(dataFile, 'utf8');

// The file format is `const appData = { ... };` 
// We will evaluate it, manipulate it, and write it back
let appData;
eval(dataContent.replace('const appData =', 'appData ='));

let vi = appData.veri_iletisimi;

// Remove questions
const toRemove = ["198", "188", "187", "164", "159", "149", "143", "126", "45"];
vi = vi.filter(q => !toRemove.includes(q.id));

// Fix shifted options
let q182 = vi.find(q => q.id === "182");
if(q182) {
  q182.options.find(o => o.key === "C").text = "Signal Access Network";
  q182.options.find(o => o.key === "D").text = "Security Area Network";
}

let q139 = vi.find(q => q.id === "139");
if(q139) {
  q139.options.find(o => o.key === "C").text = "Latency";
  q139.options.find(o => o.key === "D").text = "Goodput";
}

let q96 = vi.find(q => q.id === "96");
if(q96) {
  q96.options.find(o => o.key === "A").text = "Full Duplex";
  q96.options.find(o => o.key === "B").text = "Half Duplex";
}

let q68 = vi.find(q => q.id === "68");
if(q68) {
  q68.options.find(o => o.key === "C").text = "Routing";
  q68.options.find(o => o.key === "D").text = "Switching";
}

// Update Answers
let q132 = vi.find(q => q.id === "132"); if(q132) q132.answer = "A";
let q98 = vi.find(q => q.id === "98"); if(q98) q98.answer = "B";
let q43 = vi.find(q => q.id === "43"); if(q43) q43.answer = "B";
let q16 = vi.find(q => q.id === "16"); if(q16) q16.answer = "B";

const fallbackTerms = ["VLAN", "Topoloji", "ARP", "Spanning Tree"];

// Process all formatting
vi.forEach(q => {
  q.options.forEach(opt => {
    // Remove parentheses and their contents from the option logic
    opt.text = opt.text.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();

    if (opt.text.includes("Bilinmiyor/Eksik") || opt.text === "") {
        opt.text = fallbackTerms[Math.floor(Math.random() * fallbackTerms.length)];
    }
  });
});

appData.veri_iletisimi = vi;

// Now save back as readable JS
fs.writeFileSync(dataFile, 'const appData = ' + JSON.stringify(appData, null, 2) + ';\n', 'utf8');
console.log('Fixed veri_iletisimi questions and written to data.js');
