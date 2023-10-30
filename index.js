function Season () {
    let game = prompt ('Введите номер месяца');
    if (game == 12 || game == 1 || game == 2) {
    return "Зима";
    } else if (game == 3 || game == 4 || game == 5) {
        return "Весна";
    } else if (game == 6 || game == 7 || game == 8) {
        return "Лето";
    } else if (game == 9 || game == 10 || game == 11) {
       return "Осень";
    } 
}
// alert (Season);

function words() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
    let question1 = prompt('Чему равняется первый элемент массива?');
    let question2 = prompt('Чему равняется последний элемент массива?');
    if(arr[0].toLowerCase() === question1.toLowerCase() && arr[arr.length-1].toLowerCase() === question2.toLowerCase()) {
        alert('Молодец, вы угадали, запомнили все слова!');
        return gameStop ();
    } else if (arr[0].toLowerCase() === question1.toLowerCase() || question2.toLowerCase() === arr[arr.length-1].toLowerCase()){
        alert ('Вы были близки к победе!');
        return gameStop ();
    } else {
        alert ('Вы не угадали!');
        return gameStopn();
    }
function gameStop() {
    let a = confirm ('Хочешь продолжить игру?');
    if (a === true) {
        return (words());
    } else {
        alert('Спасибо за внимание!');
    }
}
}