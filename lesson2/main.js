// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let number = [4, 10, 48, 'member', 'phone', 'call', true, false, 59, 69]
console.log(number [0]);
console.log(number [1]);
console.log(number [2]);
console.log(number [3]);
console.log(number [4]);
console.log(number [5]);
console.log(number [6]);
console.log(number [7]);
console.log(number [8]);
console.log(number [9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books1 = {
    tittle: 'Harry Potter',
    pageCount: 201,
    genre: 'Fantasy'
};
console.log(books1)

let books2 = {
    tittle: 'The fault in our stars',
    pageCount: 245,
    genre: 'business'
};
console.log(books2);

let books3 = {
    tittle: 'The Husbands Secret',
    pageCount: 178,
    genre: 'bestseller'
};
console.log(books3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books11 = {
    tittle: 'Harry Potter',
    pageCount: 201,
    genre: 'Fantasy',
    authors:[
        {
           name: 'J.K.Rowling',
           age: 56,
        },
    ]
};
console.log(books11)

let books22 = {
    tittle: 'The fault in our stars',
    pageCount: 245,
    genre: 'business',
    authors: [
        {
            name: 'John Green',
            age: 44,
        },
    ]
};
console.log(books22);

let books33 = {
    tittle: 'The Husbands Secret',
    pageCount: 178,
    genre: 'bestseller',
    authors: [
        {
            name: 'Liane Moriarty',
            age: 55,
        },
    ]
};
console.log(books33);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Ivan', username: 'vano228', password: 'vanchik'},
    {name: 'Misha', username: 'Mishka8', password: 'mishania'},
    {name: 'Sveta', username: 'Svetka', password: 'svetylik'},
    {name: 'John', username: 'John18', password: 'Johnsik'},
    {name: 'Kristina', username: 'Kristi69', password: 'qwerty'},
    {name: 'Pavlo', username: 'Pavlysha', password: 'pashka228'},
    {name: 'Nadia', username: 'Nadka', password: 'nadiarr'},
    {name: 'Ihor', username: 'Ihorek', password: 'ihorkabest'},
    {name: 'Orest', username: 'Orestblack', password: 'blood13'},
    {name: 'Roman', username: 'Romeo', password: 'Dzhuletta'},

]
// console.table(users,['password'])
console.log(users)
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
