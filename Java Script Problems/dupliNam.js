let names = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
let uname = [];
for(let i = 0; i < names.length; i++ ){
    let element = names [i];
    let index = uname.indexOf(element);
    if(index == -1){
        uname.push(element);
    }

}
console.log(uname);