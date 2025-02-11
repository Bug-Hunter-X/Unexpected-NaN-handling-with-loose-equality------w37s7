function foo(x) {
  if (x == null) {
    return 0; // This will not work as expected for NaN
  }
  return x + 1;
}

console.log(foo(NaN)); // Output: NaN
console.log(foo(null)); // Output: 0