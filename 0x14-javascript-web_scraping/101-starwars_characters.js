#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
request(url, (err, res, bd) => {
  if (!err) {
    const chrs = JSON.parse(bd).characters;
    printTheCharacters(chrs, 0);
  }
});

function printTheCharacters (chrs, i) {
  request(chrs[i], (err, res, bd) => {
    if (!err) {
      console.log(JSON.parse(bd).name);
      if (i < chrs.length - 1) {
        printTheCharacters(chrs, i + 1);
      }
    }
  });
}
