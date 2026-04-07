//Implicit Conversion

// + with a string -> concatenation
let result1 = "5" + 2;
console.log(result1);
// "52"
console.log(typeof result1);

// - always forces numeric conversion
let result2 = "5" - 2;
console.log(result2);
// 3
console.log(typeof result2);

//Explicit Conversion

let str = "123";
let num = Number(str);
console.log(num);
console.log(typeof num);
// Number -> String
let value = 100;
let text = String(value);
console.log(text);
console.log(typeof text);
// Any value -> Boolean
console.log(Boolean(0));
// false
console.log(Boolean(1));
// true
console.log(Boolean(""));
// false
console.log(Boolean("Hi"));
// true