// Map using reduce

if (!Array.prototype.jsdMap) {
  Array.prototype.jsdMap = function (callback, args) {
    return this.reduce(function (previousValue, currentValue, index, array) {
      previousValue[index] = callback.call(args, currentValue, index, array);
      return previousValue;
    }, []);
  };
}
// without arguments
console.log(
  [1, 2, 3].jsdMap(function (x) {
    return x * 2;
  })
);

function sid(x, y) {
  return x * y;
}
// with arguments
console.log(
  [1, 2, 3].jsdMap(function (x) {
    return sid(x, 3);
  })
);
