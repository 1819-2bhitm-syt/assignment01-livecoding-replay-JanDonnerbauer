//Value Type
/*
let x = 10;
let y = x;

x = 20;

console.log("x = ",x);
console.log("y = ",y);
*/

//Reference Type
/*
let x = { value: 10};
let y = x;

x.value = 20;

console.log("x = ",x);
console.log("y = ", y);
*/

//weiteres Beispiel 1
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

//weiteres Beispiel 2
let obj = { value: 10};

function increase1(obj) {
    obj.value++;
}

increase1(obj);
console.log(obj);