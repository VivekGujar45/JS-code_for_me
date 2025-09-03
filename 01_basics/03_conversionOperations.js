let score = //true//undefined //null //"33abc" -> INPUT_TYPES

console.log(typeof score);
console.log(typeof (score));// get the data type of the value

// NUMBER CONVERSION
let valueInNumber = Number(score) // convert string into the number by (Number) keyword
console.log(typeof valueInNumber);
console.log(valueInNumber); // print the value 
 
// "33abc"=NaN
// null=0
// undefined=NaN
// true/false= 1/0

// BOOLEAN CONVERISON
let isLoggedIn = 0

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1=true 0=false
// " " = false
// "vivek" = true 

// STRING CONVERSION
let someNumber=45

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);