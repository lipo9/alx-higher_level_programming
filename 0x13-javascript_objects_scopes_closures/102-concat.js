#!/usr/bin/node
const fs = require('fs');

const s1 = fs.readFileSync(process.argv[2]).toString();
const s2 = fs.readFileSync(process.argv[3]).toString();
fs.writeFileSync(process.argv[4], s1 + s2);
