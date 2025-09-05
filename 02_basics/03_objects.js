// singleton
// 

// object literals

const mySym=Symbol("key1")

const JSuser = {
    name: "vivek",
    "fullname": "vivekgujar",
    [mySym]: "mykey1",
    age: 22,
    location: "PCMC",
    email: "vg@google.com",
    isLoggedin: false,
    lastLoginDays: ["mon","sat"]
}

// console.log(JSuser.email); // dot deke hi aap call kr skate ho object ko
// console.log(JSuser["email"]); // sidhe bracket se bhi kar sakte ho
// console.log(JSuser.fullname);
// console.log(JSuser[mySym]);
// console.log(typeof JSuser[mySym]);

JSuser.email = "vivekgujar@chatgpt.com" // ovrwrites the object element
//Object.freeze(JSuser)
JSuser.email = "vivekguj@zomato.com"

console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());


