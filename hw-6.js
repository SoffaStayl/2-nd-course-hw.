const numbs = [1, 5, 4, 10, 0, 3]; //задание 1
for (let i = 0; i < numbs.length; i++ ) {
    if (numbs [i] === 10) break;
    console.log(numbs[i]);
} 


const arr = [1, 5, 4, 10, 0, 3]; //задание 2
console.log(arr.indexOf(4)); 


const a = [1, 3, 5, 10, 20]; //задание 3
console.log(a.join (''));
const even = [];
for (let b = 1; b++;) {
    even[b]=[];
for (let c = 1; c++;) {
    even[b][c];
}
}console.log(even); 


const sun = []; //задание 4
for (let k = 0; i < 3; k++){
    sun [k] = [];
    for ( let j = 0; j++;) {
        sun [i].push (j === 1);
    }
}
console.log(sun);

const owl = [1, 1, 1]; //задание 5
owl.push (2, 2, 2);
console.log(owl);

const world = [9, 8, 7, 'a', 6, 5]; //задание 6
world = world.sort('a');
console.log(world);



const quiz = [9, 8, 7, 6, 5]; //задание 7
let d = prompt('Угадай число');
d = quiz.includes (7);
alert ('угадал');
d = quiz.includes (1);
alert ('не угадал');





const str = 'abcdef'; //задание 8
console.log(str.split('').reverse().join(''));


const lion = [[1, 2, 3,], [4, 5, 6]]; //задание 9
const flat = lion.flat();
console.log(flat);


const sum = [1, 3, 6, 5, 7]; //задание 10
for (let f = 0; f < sum.length - 1; f++) {
   const numbers = sum + sum [f + 1];
}
console.log(numbers);


const products = [1, 6, 5, 8, 2, 3]; //задание 11
const squares = products.map(function (num){ 
    return num * num
})
console.log(squares);


const getLenghtwords = [ 'слово', '', 'слог', 'длинное предложение', 'буква'] ; //задание 12
const getwords = function(get) {
    let length = get.map (el => el.length)
    return length;
}
 console.log(getwords(getLenghtwords));

const negative = [1, 0, -10, 6, -150, -35, 5, -6]; //задание 13
function filterPositive(){
    const array = negative.filter (el => el < 0);
    return array;
}
console.log(negative);
 
