const fs = require('fs');
const updatedQuestions = require('./update_questions.js'); 
// wait, update_questions doesn't export. I will just rewrite the replacing logic and read from update_questions.js directly.

let bgScript = fs.readFileSync('update_questions.js', 'utf8');
// Extract the questions array from the script
let match = bgScript.match(/const questions = (\[[\s\S]*?\]);\s*const dataJsPath/);
if (match) {
    let newJSON = match[1];
    
    let dataContent = fs.readFileSync('data.js', 'utf8');
    // find where appData.bilgiguvenligi = starts
    let idx = dataContent.indexOf('appData.bilgiguvenligi =');
    
    if (idx !== -1) {
        // truncate here
        dataContent = dataContent.substring(0, idx);
    }
    
    dataContent += 'appData.bilgiguvenligi = ' + newJSON + ';\n';
    fs.writeFileSync('data.js', dataContent);
    console.log("Successfully replaced appData.bilgiguvenligi with", JSON.parse(newJSON).length, "questions.");
} else {
    console.log("Could not find questions array in update_questions.js");
}
