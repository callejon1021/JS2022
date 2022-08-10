// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function side(a, b) {
//     return a * b;
// }
// let x = side (15,10);
// console.log(x)
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(p, r) {
//     // let s = p * r * r;
//     return p * r * r;
// }
// let x = area(10, 15);
// console.log(x)
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area(h, r) {
//     return 3.14 * r * (h + r);
// }
// let x = area(10, 15);
// console.log(x)
// // - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [1,2,3,4];
// let funk = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// funk(array);

//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraph(`hello owu`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function name(lig) {
//     document.write(`<ul>`)
//
//         document.write(`<li> ${lig}</li>`)
//         document.write(`<li> ${lig}</li>`)
//         document.write(`<li> ${lig}</li>`)
//     document.write(`</ul>`)
//
// }
//
// name(`text`)
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function name(lig, count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++)
//     {
//         document.write(`<li> ${lig}</li>`)
//     }
//     document.write(`</ul>`);
//
// }
//
// name(`text`, 3)

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1, true, false, 'hello', 'owu']
// function name(arr) {
//     document.write (`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
//
// }
// name(array);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
// let x = [
//     {id: 1, name: 'Andrii', age: 26},
//     {id: 2, name: 'Petya', age: 23},
//     {id: 3, name: 'Petro', age: 25},
// ]
// function foo(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} || ${arrElement.name} || ${arrElement.age}</div>`)
//     }
// }
// foo(x);
// // - створити функцію яка повертає найменьше число з масиву
//
// let numMin = (array) => {
//     let min = array [0];
//     for (let numMinElement of array) {
//         if (numMinElement < min) min = numMinElement;
//     }
//     return min;
//
// };
// let arNumMin = numMin([15, 28, 32, 18, 2, 0, -28, -20]);
// console.log(arNumMin);
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1, true, false, 'hello', 'owu']
// function foo (arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum
// }
//
// console.log(foo(array));



