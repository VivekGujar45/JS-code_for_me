const name="Vivek"
const repocount=45

// console.log(name+repocount+"worddd");

console.log(`My name is ${name} and my repo count is ${repocount}`); // this is good way to print any statement directly

const gameName = new String('VickyGujar')

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length); // string ki length find karta hai
console.log(gameName.toUpperCase()); //uppercase kar deta hai string ko
console.log(gameName.charAt(5)); //konse index pe konsa character hai
console.log(gameName.indexOf("V")); //konse index pe yeh char hai

const newString = gameName.substring(2, 6)
console.log(newString);

const anotherString = gameName.slice(-8, -5)
console.log(anotherString);

const newStringOne = "    vickyyy   "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the white spaces in the string

const var1="xdrctfvyg//cfvyg/cfvyg-tfcyvguh"
console.log(var1.replace("tfcyvguh","%5%"));

console.log(var1.includes("vivekgujar"));

console.log(gameName.split("y"));
