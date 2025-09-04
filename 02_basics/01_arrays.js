const arr= [2,5,7,1,"vivek",true] //resizable and contains mix of diff data types
// arrays are zero-based indexing 
const arr2 = new Array(4,7,1,3)
const heroes=["rs","vk","vg"]

console.log(arr[0]);

// Array Methods

arr.push(3)
arr.push(4)
arr.pop()

arr.unshift(9)
arr.shift()

console.log(arr.includes(9));
console.log(arr.indexOf(5));

const newArr = arr.join()

console.log(newArr);
console.log(arr);

// slice,splice

console.log("A", arr);

console.log("B",arr);
const myn1 = arr.slice(1,3)//range meien last term include nahi karte hai
console.log(myn1);

const myn2 = arr.splice(1,3) //original array ko pura change kr deta hai 
console.log("C", arr);
console.log(myn2);






