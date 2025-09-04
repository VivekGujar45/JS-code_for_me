const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeroes= marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const allnewheroes = [...marvel_heroes, ...dc_heroes]
// console.log(allnewheroes);

const another_Arr=[1,2,4,7,[5,6,8],9,[1,3,[2,7]]]

const real_another_array = another_Arr.flat(Infinity)//it merge the all the arrays in it
console.log(real_another_array);


console.log(Array.isArray("Vivek"));
console.log(Array.from("Vivek"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
