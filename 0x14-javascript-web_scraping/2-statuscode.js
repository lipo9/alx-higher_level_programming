#!/usr/bin/node

const request = require('request');
request(process.argv[2], (error, response) => {
  if (error == null) {
    console.log('code: ' + response.statusCode);
  }
});
