function min (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log (min (8, 4));
function even_odd (c) {
    if (c % 2 === 0) {
        return 'Четное';
    } else {
        return 'Нечетное';
    }
}
console.log (even_odd (6));
function square (d) {
    let mult = d * d;
    console.log (mult);
}
function square_return (number) {
    return number ** 2;
}
console.log (square_return (5));
function user (age) {
    let f = prompt ('Сколько вам лет?');
    if ( f < 0) {
        alert ('Вы ввели неправильное значение');
    } else if ( f <= 12) {
        alert ('Привет, друг!');
    } else if ( f >= 13 ) {
        alert ('Добро пожаловать!')
    }
}
function printnumber (g, k) {
   let result = isNaN (g);
   let print = isNaN (k);
    if ( result === false || print === false) {
        alert ('Одно или оба значения не являются числом')
    } else {
        let sum = g * k;
        return sum;
    }
}
function number_cub () {
    let v = prompt ('Введите число');
    let z = Number (v);
    if (isNaN (z)) {
        return "Переданный параметр не является числом";
    } else {
        let cube =  z ** 3;
        return `${z} в кубе равняется ${cube}` ;
    }
}
function getCircleArea () {
    return this.radius * this.pi;
}
function getCirclePerimeter () {
    return this.radius * this.pi * 2;
}
const circle1 = {
    radius: 10,
    pi: 3.14,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};
const circle2 = {
    radius: 5,
    pi: 3.14,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};
console.log (circle1.getArea ());
console.log (circle1.getPerimeter ());
console.log (circle2.getArea ());
console.log (circle2.getPerimeter ());
