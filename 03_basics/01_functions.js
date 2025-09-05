function sayMyname(){
    console.log("V");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("K");
}

// sayMyname //reference to the object
// sayMyname() //execution of the function

// function addTwoNumbers(n1,n2)
// {
//     console.log(n1+n2);
    
// }

function addTwoNumbers(n1,n2)
{
    // let result = n1+n2
    // return result
    return n1+n2
}

const result = addTwoNumbers(3,5)
console.log("Result is: ",result);

// addTwoNumbers(3,4)//it will give 7
// addTwoNumbers(3,"4")//it will give 34 considering both as strings
// addTwoNumbers(3,"a")//it will give 3a 

function loginUserMessage(username="sam"){
    if(username === undefined)
    {
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("VivekGujar"))

// console.log(loginUserMessage(""))//result is just logged in
// console.log(loginUserMessage())//result is undefined just logged in



