// if

// const userLoggedIn = true
// marks=52
// if (marks >=50) {
//     console.log("gretaer than 50");
    
// } else{
//     console.log("less than 50");
    
// }
// console.log("false");


// >,<,<=,>=,=(assign karto),==(equal ahe ka check krto),===(equal ahe ka check krto with data type)
// !=, !==

// const score =200

// if (score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);// not defined scope issue

// const balance =1000

// if (balance >500) console.log("test"), console.log("test2");
// ;

// const balance =1000
// if (balance<500) {
//     console.log("less than 500");
    
// }else if (balance <750){
//     console.log("less than 750");
    
// }else if (balance<900){
//     console.log("less than 900");
    
// }else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn&&debitCard){
    console.log("Allow to buy course");
    
}
if (loggedInFromGoogle||loggedInFromEmail){
    console.log("allow to login");
    
}

