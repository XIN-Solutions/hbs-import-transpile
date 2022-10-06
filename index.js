#!/usr/bin/env node

const Transpile = require('./transpile.js');

const [cwd, script, filename] = process.argv;
console.log("Processing: ", filename);
Transpile.transpile(filename);
