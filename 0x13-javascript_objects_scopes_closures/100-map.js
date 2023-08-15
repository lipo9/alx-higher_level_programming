#!/usr/bin/node
const list1 = require('./100-data').list;
const list2 = list1.map((num, index) => {
  return num * index;
});
console.log(list1);
console.log(list2);
