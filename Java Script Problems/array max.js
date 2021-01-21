let marks = [56, 76, 54, 23, 43, 98];
// let max = Math.max(56, 76, 54, 23, 43, 98);
// console.log(max);
let max = marks[0];
for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest Mar IS:", max);
