//promise is created
const promiseOne = new Promise(function(resolve,reject){
    // Do an asyn task
    // Db calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task is complete');
        resolve()//this connects both the settimeout and promise together and returns everything it contains
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Asyn 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email:"vivguj@ai.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "vivek",password: "123"})
        } else{
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolved or rejected"));

// console.log(username);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "javascript",password: "123"})
        } else{
            reject('Error: JS went wrong')
        }
    },1000)
})

// promiseFive.then(()=>{})

async function consumePromiseFive( ){
    try{
    const respone=await promiseFive
    console.log(respone);
    } catch (error){
        console.log(error);
        
    }
    
}    

consumePromiseFive()

async function getAllusers() {
    try{
    const response = await fetch('')
    const data = response.json()
    console.log(data);
    }
    catch (error) {
        console.log('Error find',error);
        
    }
    
}
    
