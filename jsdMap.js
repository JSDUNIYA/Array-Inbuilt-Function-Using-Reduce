// Map using reduce

if (!Array.prototype.jsdMap) {
  Array.prototype.jsdMap = function (callback, args) {
    return this.reduce(function (previousValue, currentValue, index, array) {
      previousValue[index] = callback.call(args, currentValue, index, array);
      return previousValue;
    }, []);
  };
}

// Map using plain for loop

if (!Array.prototype.jsdMap1) {
  Array.prototype.jsdMap1 =  function (callback) {
    var pp = [];
    for (let i = 0; i < this.length; i++) {
      pp[i] = callback(this[i]);
    }
    return pp;
  };
}

var x = [2,3,4].jsdMap1(function(x){return x*3})

console.log(x)




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
