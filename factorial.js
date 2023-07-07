/*
* factorial
* Problem: Given an integer n, find the factorial of that integer
* Soln: In maths, the factorial of a non-negative integer n denoted n! is the prodct of all positive integers less than or equal to n
* Big-O = O(n)
*/
function factorial(n){
    var x= 1;
    if(n===0) return 1
    for(let i=2; i<=n; i++){
        x=x*i
    }
    return x
}
console.log(factorial(5))