let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); //data typeof date

let myCreatedDate1 = new Date(2025,9,4 ) // months starts from 0-11
console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date(2025,9,4, 5,3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-09-04")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // fetch the timestamp of the date
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)) // round of the tiem which we are getting

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long", 
    // timeZone: ""
})
