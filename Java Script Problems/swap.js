/*
let a = 5;
let b = 7;
console.log('before dwap: a=', a, 'b=', b);
let temp = a;
a = b;
b = temp;
console.log("after dwap: a=", a, 'b=', b); */


// let a = 5;
// let b = 7;

// a = a + b;
// b = a - b;
// a = a - b;

//console.log("after dwap: a=", a, 'b=', b);


let a = 5;
let b = 7;

[a, b] = [b, a];
console.log("after dwap: a=", a, 'b=', b);
