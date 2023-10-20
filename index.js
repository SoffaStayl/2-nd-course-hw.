function Season () {
    let game = prompt ('Введите номер месяца');
    if (game = 12 || 1 || 2){
    return "Зима"
    } else if (game = 3 || 4 || 5) {
        return "Весна";
    } else if (game = 6 || 7 || 8) {
        return "Лето";
    } else if (game = 9 || 10 || 11) {
        return "Осень";
    }
}
alert (Season);