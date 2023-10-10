let a = 10;
alert (a);
a = 20;
alert (a); 
const iphone = 2007;
alert (iphone);
const b = 'Brendon';
alert (b);
let g = 10;
let c = 2;
 alert (g + c);
 alert (g - c);
 alert (g * c);
 alert (g / c);
 let square = 2;
 let result = 2 ** 5;
 alert (result);
 let d = 9;
 let e = 2;
 alert (d % e); 
 let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
let age = prompt ("Сколько вам лет?");
alert (age);
const user = {
    name: 'Sofa',
    age: 21,
    isAdmin: true
}
user.cityofresidence ="Кемерово";
user.age = 25;
delete user.cityofresidence;
let info = ("Что вы хотите узнать о пользователе?", "name");
alert (user[info]);
let m = prompt("Ваше имя?");
alert (`Привет, ${m}!`)