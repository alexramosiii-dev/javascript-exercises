const fibonacci = function(n) {
    if(n<0) return 'OOPS'
    let x = [1,1]
    for (let i = 0; i < n; i++) {
      x.push(x[i] + x[i+1]);
    }
  return x[n-1]
};

// Do not edit below this line
module.exports = fibonacci;
