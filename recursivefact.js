/*let factorial = 10;
for(let i =10; i>=1; i--){
    factorial = factorial * i;
    console.log(factorial);
}*/
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
        
    }
    
}

let result = factorial(10);
console.log(result);