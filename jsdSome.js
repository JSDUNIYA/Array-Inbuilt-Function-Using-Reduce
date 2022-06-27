// Some using reduce

if (!Array.prototype.jsdSome) {
  Array.prototype.jsdSome = function (callback) {
    return this.reduce(function (previousValue, currentValue, index, array) {
      if (callback(currentValue)) {
        previousValue = true;
      }
      return previousValue;
    }, false);
  };
}
// without arguments
console.log(
  [1, 2, 3].jsdSome(function (x) {
    return x > 2;
  })
);
