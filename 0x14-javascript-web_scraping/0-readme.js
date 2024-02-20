#!/usr/bin/node
const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, contents) => {
  if (contents === undefined) {
    console.log(err);
  } else {
    console.log(contents);
  }
});
