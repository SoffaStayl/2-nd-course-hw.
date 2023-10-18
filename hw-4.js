let i = 1;
let n = Number (prompt('Сколько раз вам сказать привет?'));
while (i <= n) {
    alert('Привет');
    i++;
}
let a = 1;
while (a <= 5) {
    console.log (a);
    a++;

}
let obj = { 'Коля': 200, 'Вася':300, 'Петя':400};
for (let key in obj) {
    document.write (key + 'зарплата' + obj[key] + 'долларов');
}
for (let n = 1000; num < 50; num++ ) {
    if (num = i / 2) 
        console.log (num) 
}
let friday = 1;
for (let dayNumber = friday; dayNumber <= 31; dayNumber+=7) {
    if(dayNumber % 7 == 0) {
        console.log (`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        break;
    }
}