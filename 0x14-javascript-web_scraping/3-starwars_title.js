#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
request(
  'https://swapi-api.alx-tools.com/api/films/' + id + '/',
  (err, res, bd) => {
    if (err == null) {
      const json = JSON.parse(bd);
      console.log(json.title);
    }
  }
);
