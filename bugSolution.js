function foo(x) {
  if (x === null) {
    return 0; // Correctly handles null
  } else if (Number.isNaN(x)) {
    return -1; // Or any suitable value for NaN
  }
  return x + 1;
}

console.log(foo(NaN)); // Output: -1
console.log(foo(null)); // Output: 0