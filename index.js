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