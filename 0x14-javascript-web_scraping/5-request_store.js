#!/usr/bin/node

const request = require('request');
const fs = require('fs');

request(process.argv[2], (err, res, bd) => {
  if (err == null) {
    fs.writeFileSync(process.argv[3], bd);
  }
});
