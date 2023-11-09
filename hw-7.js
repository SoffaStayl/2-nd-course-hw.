// Задание 1;
let word = 'привет';
console.log(word.toUpperCase());


// Задание 2;
function searchTurkishSeries (arr, str) {
    const arrTurkish = [];
    arr.forEach ((el) => {
        if (el.toLowerCase().startsWith(str)){
            arrTurkish.push(el);
        }
    });
    return arrTurkish
}
console.log(searchTurkishSeries (['Любовь напрокат', 'Улица', 'Любовь не понимает слов', 'Молодежка', 'Дневники вампира'], 'любовь'));


//Задание 3;
console.log(Math.ceil(32.58884));
console.log(Math.floor(32.58884));
console.log(Math.round(32.58884));


//Задание 4;
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min (...numbers);
const max = Math.max (...numbers);
console.log (`Наименьшее число: ${min}`);
console.log (`Наибольшее число: ${max}`);


// Задание 5;
function getRandomInt (minValue, maxValue){ 
    return Math.round(Math.random() * (maxValue - minValue)) + minValue}
    console.log (getRandomInt(1, 10));
 

// Задание 6;
function getRandom(maxValue){
    const getRandomRe = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++){
        getRandomRe[i] = Math.floor(Math.random() * maxValue);
    }
    return getRandomRe;
}
console.log(getRandom(7));


// Задание 7;
function getRandomInter (minValue, maxValue){ 
    return Math.round(Math.random() * (maxValue - minValue)) + minValue}
    console.log (getRandomInter(25, 125));


// Задание 8;
let myDate = new Date();
console.log(myDate);


// Задание 9;
let currentDate = new Date();
currentDate.setDate (currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10;
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const sun = (currentDate) => {
    let time = (n) => {
        if (n < 31) {
            return "0" + n;
        }
    }
    let date = time (currentDate.getDate());
    date = time (date);
   
let month = months[currentDate.getMonth()];
let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
if (hours < 10) {
    hours = "0" + hours;}
let min = currentDate.getMinutes();
if (min < 10){
    min = "0" + min;
}
let sec = currentDate.getSeconds();
if (sec < 10) {
    sec = "0" + sec;
}
console.log (`Дата: ${date}.${month}.${currentDate.getFullYear()} - это ${day}.`);
console.log (`Время: ${hours}:${min}:${sec}`);
}
sun(new Date());
