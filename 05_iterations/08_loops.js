//reduce functions

const myNums = [1,2,3]

// const myTotal=myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and curval: ${currval}`);
    
//     return acc+currval
// },0)


const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
console.log(myTotal);

const shoppincart = [
    {
        itemName: 'js course',
        price: 999
    },
    {
        itemName: ' AI course',
        price: 199
    },
    {
        itemName: 'java course',
        price: 2999
    },
    {
        itemName: 'DS course',
        price: 1999
    }
]

const priceToPay=shoppincart.reduce((acc,item)=> acc+item.price,0)
//ADD of the bill by reduce
console.log(priceToPay);
