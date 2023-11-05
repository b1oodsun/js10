// 1) Напишите функцию JavaScript, которая принимает массив из списка названий стран в качестве входных данных и возвращает самое длинное название страны в качестве выходных данных.

// Например вызывая функцию getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"])

// Ожидаемые результат: Соединённые Штаты Америки

function getLongestCountryName(country) {
    return country.reduce(function(name, country) {
    return name.length > country.length ? name : country;
},"");
} console.log(getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"]));



// 2) Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.
// Например вызывая функцию  alphabetOrder('alphabetical')
// Ожидаемый результат: 'aaabcehillpt'

function alphabet_order(str) {
    return str.split('').sort().join('');
}
alert(alphabet_order("alphabetical"));



// 3) Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
// Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// На выходе должно быть: [7,4,7,8]

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let vegetableLength = vegetables.map((item) => { return item.length });

alert(vegetableLength);



// 4) Напишите функцию generateNumbers(start, len), 
// которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.
// Например вызывая функцию generateNumbers(0, 5)
// Ожидаемый результат: [0,1,2,3,4]
// generateNumbers(-5, 4)  // -> [-5,-4,-3,-2]

function generateNumbers(start, len) {
let arr = [];
for (let i = 0; i < len; i++) {
arr[i] = start++
}
return arr
}
console.log(generateNumbers(0, 5) || (-5));




// 5) Напишите функцию, которая возвращает новый объект без указанных значений.
// const without = (object, ...args) => {
// Напишите здесь свое решение
// }
// Например дан объект const data = { a: 1, b: 2, c: 3 } и при вызове функции without(data, 'b', 'c')
// Ожидаемые результат: { a: 1 }

const without = (object, ...args) => {
    const Obj = {...object};
    args.forEach(arg => delete Obj[arg]);
    return Obj;
}
const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c'));