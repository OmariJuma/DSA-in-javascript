/* 
* PrimeNo
* problem: Given a number n, determine if the number is prime or not
* Soln: A prime number is a natural number greater than 1 that is divisible by 1 and itself
* less optimal =>     for(let i=2; i<n; i++) will be O(n)
* optimal soln =>     for(let i=2; i<= Math.sqrt(n); i++){ 

*/

function primeNo(n){
    if(n <= 1){
        return false
    }
    if(n===2){
        return true
    }
    for(let i=2; i<= Math.sqrt(n); i++){ 
        if(n%i===0){
            return false
        }
        return true
    }

}
console.log(primeNo(1))
console.log(primeNo(2))
console.log(primeNo(3))
console.log(primeNo(5))
console.log(primeNo(10000000001))