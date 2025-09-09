// for of

const arr=[1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}

const greetings="hello world"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN','IND')
map.set('USA','United america')
map.set('FR','france')

// console.log(map);

for(const [key,value] of map){
    // console.log(key,':-',value);
    
}

const myObject = { //object is not iterable
    'game1': 'NFS',
    'game2': 'spiddy'
}

for(const [key,value] of myObject){
    // console.log(key,':-',value);
    
}