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
    if ( age < 0) {
        alert ('Вы ввели неправильное значение');
    } else if ( age <= 12) {
        alert ('Привет, друг!');
    } else if ( age >= 13) {
        alert ('Добро пожаловать!')
    }
}
function printnumber (g, k) {
    let g = 10;
    let k = 25;
    isNaN (g, k);
    if ( printnumber === false) {
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
function getRectangleArea () {
    return this.radius * this.pi;
}
function getRectanglePerimeter () {
    return this.radius * this.pi * 2;
}
const circle1 = {
    radius: 10,
    pi: 3.14,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};
const circle2 = {
    radius: 5,
    pi: 3.14,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};
console.log (circle1.getArea ());
console.log (circle1.getPerimeter ());
console.log (circle2.getArea ());
console.log (circle2.getPerimeter ());
