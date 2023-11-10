// Задание 1;
const people = [
{ name: 'Глеб', age: 29},
{ name: 'Анна', age: 17},
{ name: 'Олег', age: 7},
{ name: 'Оксана', age: 47}
];
people.sort(function(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
});
console.log(people);


//Задание 2;
function isPositive(get){
   return get > 0;
}
function isMale (name){
return name.gender === "male";
}
function filter (arr, rule){
const arrResult = [];
for (let item of arr){
    if(rule(item)) {
        arrResult.push(item);
    }
}
return arrResult;
}

console.log(filter([3, -4, 1, 9], isPositive));

const human = [{name: 'Глеб', gender: 'male'},
{name: 'Анна', gender: 'female'},
{name: 'Олег', gender: 'male'},
{name: 'Оксана', gender: 'female'} ];
console.log(filter(human, isMale));


// Задание 3;

    let currentDate = new Date();
    console.log(currentDate);
  
    let timerId = setInterval(() => console.log(currentDate), 3000);
    setTimeout(() => {clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

   
    //Задание 4;
    function delayForSecond(callback) {

        setTimeout(callback, 1000)
      
        callback();
      }
      delayForSecond(function () {
      console.log('Привет, Глеб!');
       });


       //Задание 5;
       function delayForSecondTwo(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if(cb) {  cb(); }
        }, 1000)
      }
      
      function sayHi (name) {
        console.log(`Привет, ${name}!`);
      }
      
      delayForSecondTwo(() => sayHi('Глеб'));
      