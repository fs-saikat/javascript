/*let fibo = [0, 1];
for (let i = 2; i <= 12; i++){
    fibo[i] = fibo[i-2] + fibo[i-1];

}
console.log(fibo);
*/
function fibonacci(n){
    let fibo = [0, 1];
for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i-2] + fibo[i-1];
    
}
 return fibo;
}
let result = fibonacci(12);
console.log(result);