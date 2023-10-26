const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++ ) {
    if (numbs [i] == 5) break;
    console.log(numbs[i]);
}
const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4)+1);
const a = [1, 3, 5, 10, 20];
console.log(a.join (''));
const even = [];
for (let b = 1; b++;) {
    even[b]=[];
for (let c = 1; c++;) {
    even[b][c];
}
} 
console.log(even);
const sun = [1, 1, 1];
sun.push (2, 2 ,2);
console.log(sun);
const world = [9, 8, 7, 'a', 6, 5];
world = world.sort();
console.log(world);
const quiz = [9, 8, 7, 6, 5];
let d = prompt('Угадай число');
if (d = quiz) {
    alert ('угадал');
} else {
    alert ('не угадал');
}
console.log(quiz);
const str = 'abcdef';
console.log(str.split('').reverse().join(''));
const lion = [[1, 2, 3,], [4, 5, 6]];
lion = lion.join();
console.log(lion);
let result = 0;
let sum = [1, 3, 6, 5, 7];
for (let f = 0; f < sum.length; f++) {
    result += sum(f);
}
console.log(result);
const products = [1, 6, 5, 8, 2, 3];
function square(num) {
    return num * num;
}
products = products.map(square);
const getLenghtwords = [ 'слово', '', 'слог', 'длинное предложение', 'буква'] ;
function lenghtword(get){
let len = [];
let word = str.split(' ');
for (let g = 0; g < word.lenght; g++){
    len.push(word[g].length);
}
return len;
}
console.log(lenghtword(getLenghtwords) );
const negative = [1, 0, -10, 6, -150, -35, 5, -6];
function filterPositive(array){
    const array = negative.filter (el => el < 0);
    return array;
}
 
