var student = { id:121, phone:5876576465, name:"Abir"};
 var student2 = {id:121, phone:78687, name:"mahi"};
 
 //3 way to find exact property value
 var phoneN = student.phone;
 var phoneN = "phone"
var phoneN = student["phone"]; 
//update number
student2.phone = 6546547564;
student2["phone"] = 69876978;
student2.fail = "ssc fail"

 console.log(phoneN);
 console.log(student2);