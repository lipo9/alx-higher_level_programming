#!/usr/bin/node
exports.addMeMaybe = function (number, myFunction) {
  myFunction.call(this, number + 1);
};
