/*fibonacci
* Problem: Given a number n, find the first n elements of the fibonacci sequence
* soln: In maths, the fibonacci sequence is a sequence in which each number is the sum of the preceding two ones
*/
function fibonacci(n) {
    const fib= [0, 1]
    for (let x=2; x < n; x++) {
        fib[x] = fib[x - 1] + fib[x - 2]
        console.log(fib);
  }
  return fib;
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))