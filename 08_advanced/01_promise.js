//promise is created
const promiseOne = new Promise(function(resolve,reject){
    // Do an asyn task
    // Db calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task is complete');
        
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})
    
