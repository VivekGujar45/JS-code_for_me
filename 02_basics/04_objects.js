//const tinderUser = new Object() //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Vivek"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularuser = {
    email: "viv@google.com",
    name: {
        fullname:{
            userfullname:{
                firstname: "Vivek",
                lastname: "Gujar"
            }
        }
    }
}
//console.log(regularuser.name.fullname.userfullname.firstname);

const obj1 = {1:"A", 2: "B"}
const obj2= {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1,obj2) //assign() used to return some desired object by combining on of the objects.

const obj3 = {...obj1, ...obj2} //best way to seperate the data and combine it.
//console.log(obj3);

const users = [
    {
        id: 1,
        name: "vivek" 
    },
    {
        email: "asdf@google.com"
    },
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// it gives out array when you call the objects

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));