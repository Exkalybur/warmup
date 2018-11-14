const nthFibonacci = function(n) {
  //linear time complexity

  // if(nthFibonacci.mem[n]) {
  //    return nthFibonacci.mem[n];
  // }
  // for(let i=0; i<= n; i++) {
  //   nthFibonacci.mem[i] = i < 2 ? i : nthFibonacci.mem[i-1] + nthFibonacci.mem[i-2];
  // }
  // return nthFibonacci.mem[n];

  //optimized for space complexity

  let mem = [0, 1];
  for (; n > 1; n--) {
    mem.push(mem.shift() + mem[0]);
  }
  return mem[n];
};

nthFibonacci.mem = [];

console.log(nthFibonacci(10));
