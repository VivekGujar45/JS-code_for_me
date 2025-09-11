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
    setTimeout
})
    
