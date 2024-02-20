#!/usr/bin/node

const request = require('request');

request(process.argv[2], (err, res, bd) => {
  if (err == null) {
    const resp = {};
    const json = JSON.parse(bd);
    for (let i = 0; i < json.length; i++) {
      if (json[i].completed === true) {
        if (resp[json[i].userId] === undefined) {
          resp[json[i].userId] = 0;
        }
        resp[json[i].userId]++;
      }
    }
    console.log(resp);
  }
});
