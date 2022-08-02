// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3
    let x = +prompt('1')
        console.log(x)
    if ( x !== 0) {
        console.log(x ='вірно');
    } if ( x === 0) {
        console.log('Невірно');
}


//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).




        //
        let time = prompt('what time')
        if ( time >= 0 && time <= 15) {
            console.log('first');
        } else if ( time >= 16 && time <= 30){
            console.log('2nd');
        } else if ( time >=31 && time <= 45) {
            console.log('3nd');
        } else if ( time >=46 && time <=59) {
            console.log('4nd');
        }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

    let day = prompt('what day?');
        if ( day >= 1 && day <= 10) {
            console.log('first decade');
        } else if ( day >= 11 && day <= 20){
            console.log('2nd decade');
        } else if ( day >= 21 && day <= 31){
            console.log('3nd decade');
        }
    //

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
//     на цей день (можна замість плану на день, назву дня англійською).
//
        let week = prompt('what a days?');

            switch (week) {
                case "1":
                    document.write('monday');
                    console.log('monday');
                    break;
                case "2":
                    document.write('tuesday');
                    console.log('tuesday');
                    break;
                case "3":
                    document.write('wednesday');
                    console.log('wednesday');
                    break;
                case "4":
                    document.write('thursday');
                    console.log('thursday');
                    break;
                case "5":
                    document.write('friday');
                    console.log('friday');
                    break;
                case "6":
                    document.write('saturday');
                    console.log('saturday');
                    break;
                case "7":
                    document.write('sunday');
                    console.log('sunday');
                    break;
            }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//



let r = 10;
let y = 20;
if (r > y) {
    console.log(r);
} else if (y > r) {
    console.log(y);
} else if (r===y) {
    console.log('equal');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподыбне, тобто кастується до false)
let surname = prompt ('john') || "default";
                console.log(surname);
