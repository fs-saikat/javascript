

function reverseString(str){
    var reverse1 = "";
    for( var i = 0; i<str.lengh; i++){
        var char = str[i];
        reverse1 = char + reverse1;
      }
      return reverse1;
}
var speech = "Hello Alien Bros.";
var alien = reverseString(statement);
console.log(alien);