// let a =10
// const b=20
// var c=30
let a=300

if (true){
    let a =10 //yeh print nahi hoga scope ke bahar
    const b=20 //yeh bhi print nhai hoga scope ke bahar
    var c=30 //yeh hojayega print 
    console.log("INNER: ",a);
    
 }
console.log(a);//global scope printed!

// console.log(a);
// console.log(b);
console.log(c);

function one() {
    const username = "vivekgujar"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website);
}
