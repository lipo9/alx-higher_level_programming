#!/usr/bin/node
exports.esrever = function (list) {
  const l = list.length - 1;
  let i = 0;
  while (i < l / 2) {
    const aux = list[l - i];
    list[l - i] = list[i];
    list[i] = aux;
    i++;
  }
  return list;
};
