/*
* isPowerOfTwo return true or false
* problem: Given a positive integer n, determine if the number is a power of two or not
* Soln: An integer is a power of two if there exists an integer x such that n===2
*/

// function isPowerOfTwo(n){
    // I tried this but its not true because its not optimal
    // if (n < 1) return false;
    // if (n === 1) return true;
    // while( n >1){
    //     if(n % 2 !==0) return false;
    //     n = n / 2
    //     return true
    // }
// }
function isPowerOfTwo(n){
        //Using AND bitwise 
        //a a power number will n in binary will always be 1 and the rest 0s
        // e.g 1 = 1, 2= 10 ,4 = 100, 8 = 1000, 16 = 10000
        if(n<0) return false
    return (n&(n-1)) ===0

}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(10))