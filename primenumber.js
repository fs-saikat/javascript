/*let n = 78;
for(i = 2; i < n; i++){
  console.log(i, n % i);
    if(n % i == 0){
        
        break;
    }

}
console.log(`its a prime`);
*/
function isPrime(n){
    for(i = 2; i < n; i++){
        console.log(i, n % i);
          if(n % i == 0){
              
              return 'Not prime';
          }
        }
        return 'prime';
}
let result = isPrime(78);
console.log(result);