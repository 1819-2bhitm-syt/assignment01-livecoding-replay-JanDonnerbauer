//Value Type
/*
let x = 10;
let y = x;

x = 20;

console.log("x = ",x);
console.log("y = ",y);
*/

//Reference Type
let x = { value: 10};
let y = x;

x.value = 20;

console.log("x = ",x);
console.log("y = ", y);