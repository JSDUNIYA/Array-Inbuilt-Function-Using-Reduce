// Filter using reduce

if (!Array.prototype.jsdFilter) {
    Array.prototype.jsdFilter = function (callback) {
      return this.reduce(function (previousValue, currentValue, index, array) {
        if(callback(currentValue)){
        previousValue.push(currentValue)
        }
        return previousValue;
      }, []);
    };
  }
  // without arguments
  console.log(
    [1, 2, 3].jsdFilter(function (x) {
      return x > 2;
    })
  );
  