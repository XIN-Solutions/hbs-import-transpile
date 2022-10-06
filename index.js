const Transpile = require('./transpile.js');

const [script, filename] = process.argv;
console.log("Processing: ", filename);
Transpile.transpile(filename);
