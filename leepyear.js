/*const year = 2028;
let remainder = year / 4;
if( remainder == 0){
    console.log(`Year is leap year`);
}
else{
    console.log(`It's not a leep year`);
}*/

function leapyear (year){
const remainder = year % 4;
if( remainder == 0){
    return true;
}
else{
    return false;
}

}
const check =leapyear(2000);
console.log(check);

//(==0 eta use kora hoi compare korar jonno)
//(=0 eta use kora hoi set korar jonno)