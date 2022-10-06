#!/usr/bin/env node

const Transpile = require('./transpile.js');

const [cwd, script, filename] = process.argv;
Transpile.transpile(filename);
