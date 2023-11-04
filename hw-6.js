const numbs = [1, 5, 4, 10, 0, 3]; //задание 1
for (let i = 0; i < numbs.length; i++ ) {
    if (numbs [i] === 10) break;
    console.log(numbs[i]);
} 


const arr = [1, 5, 4, 10, 0, 3]; //задание 2
console.log(arr.indexOf(4)); 


const a = [1, 3, 5, 10, 20]; //задание 3
const arrNumber = 30;
let result = -1;
for (let l = 0; l < a.length; l++) {
    if (a[l] === arrNumber)  {
        result = l;
        break;
    }
}


const sun = []; //задание 4
for (let k = 0; k < 3; k++){
    sun [k] = [];
    for ( let j = 0; j < 3; j++) {
        sun [k][j] = 1;
    }
}
console.log(sun);

const owl = [1, 1, 1]; //задание 5
owl.push (2, 2, 2);
console.log(owl);

const world = [9, 8, 7, 'a', 6, 5]; //задание 6
world.sort('a');
world.pop('a');
console.log(world);



const quiz = [9, 8, 7, 6, 5]; //задание 7
let d = Number(prompt('Угадай число'));
if (quiz.includes(d)) {
    alert('Угадал');
}else {
    alert('не угадал');
}





const str = 'abcdef'; //задание 8
console.log(str.split('').reverse().join(''));


const lion = [[1, 2, 3,], [4, 5, 6]]; //задание 9
const flat = lion.flat();
console.log(flat);


const sum = [1, 3, 6, 5, 7]; //задание 10
for (let f = 0; f < sum.length - 1; f++) {
   console.log(sum[f] + sum[f + 1]);
}



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
console.log(filterPositive);
 
