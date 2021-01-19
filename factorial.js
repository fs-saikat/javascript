//factorial mane holo ex; 10 er factorial ber korta hole starting 1 theke 10 porjonto gon korte hbe====1*2*3*4*5*6*7*8*9*10
//gon korle starting value 1 dhorte hbe
// Jog korar khetre 0 dea start korta hbe


/*let factorial = 1;
for(let i = 1; i <= 10; i++){
    factorial = factorial * i
    console.log(factorial);

}  */

function facttorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
        console.log(factorial);
    
    } 
    return factorial;
}
let result = facttorial(300);
console.log(result);
