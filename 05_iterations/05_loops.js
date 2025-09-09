const coding = ['js','java','cpp','python','ruby']

// coding.forEach(function(item){
//     // console.log(item);
    
// })

// coding.forEach( (val)=> {
//     console.log(item);
    
// })

// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

let myCoding=[
    {
        langName: 'javascript',
        langFileName: 'js'
    },

    {langName: 'python',
        langFileName: 'py'
    },

    {     langName: 'java',
        langFileName: 'jx'
    }
]

myCoding.forEach( (item)=> {
    console.log(item.langFileName);
    
})