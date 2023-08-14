#!/usr/bin/node
exports.callMeMoby = function (x, myFunction) {
  while (x > 0) {
    myFunction.call();
    x--;
  }
};
