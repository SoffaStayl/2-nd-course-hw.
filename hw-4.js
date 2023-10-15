let i = 1;
let n = Number (prompt('Сколько раз вам сказать привет?'));
while (i <= n) {
    alert('Привет');
    i++;
}
while (i <= 5) {
    console.log (i);
    i++;

}
let obj = { 'Коля': 200, 'Вася':300, 'Петя':400};
for (let key in obj) {
    document.write (key + 'зарплата' + obj[key] + 'долларов');
}
for (let n = 1000; n <= 50; n++) {
    let num = (n / 2)
    alert (num);
}let fridey = 1;
for (let dayNumber = fridey; dayNumber++;) {
    if(isLeap(dayNumber)) {
        console.log (`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        break;
    }
}