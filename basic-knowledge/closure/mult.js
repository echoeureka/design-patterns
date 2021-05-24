let mult = function () {
  let caches = {};
  let cache = Array.prototype.join.call(arguments, ",");
  if (caches[cache]) {
    console.log(`get from caches`);
    return caches[cache];
  }
  cache = 1;
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    cache = cache * arguments[i];
  }
  caches[cache] = cache;
  return caches[cache];
};

console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));

// warn: () => {} have no arguments

let mult_closure = (function () {
  let caches = {};
  let caculate = function () {
    let cache = 1;
    for (let i = 0; i < arguments.length; i++) {
      // console.log(arguments[i]);
      cache = cache * arguments[i];
    }
    return cache;
  };
  return function () {
    let cache = Array.prototype.join.call(arguments, ",");
    if (cache in caches) {
      console.log(`get from caches`);
      return caches[cache];
    }
    caches[cache] = caculate.apply(null, arguments);
    return caches[cache];
  };
})();

console.log(mult_closure(1, 2, 3));
console.log(mult_closure(1, 2, 3));
