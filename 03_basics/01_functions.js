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


function calculateCartPrice(...num1){//... is rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,600));

const user = {
    username: "Vivek",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}
//handleObject(user)

const myNewArray = [200,100,500,400]

function returnsecondValue(getarray){
    return getarray[1]
}
console.log(returnsecondValue(myNewArray));

