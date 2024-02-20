#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(url, (err, res, bd) => {
  if (err == null) {
    const resp = JSON.parse(bd);
    const characters = resp.characters;
    for (let i = 0; i < characters.length; i++) {
      request(characters[i], (err, res, bd) => {
        if (err == null) {
          console.log(JSON.parse(bd).name);
        }
      });
    }
  }
});
