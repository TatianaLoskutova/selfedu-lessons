let a = true;
a = String(a); // перобразуем булеан в строку
console.log(a);
console.log(typeof a);
let b = "123";
let c = Number(b); // преобразуем строку в число
console.log(c);
console.log(typeof c);

console.log("6" / "2"); // программа сама поняла, что надо преобразовать в числа и разделить их
console.log("6" + "3"); // тут получим строку 63 тут плюс считается как конкатенация
console.log("6" + 3); // тут тоже строка 63 получится
console.log(6 + 3); // !! только когда оба операнда числа, только тогда получится сложение

let x = "6",
  y = "3";
console.log(Number(x) + Number(y));

let d = "no digit";
d = Number(d);

console.log(d);

// Преобразование в числа

console.log(Number("  123  ")); // 123
console.log(Number("123z")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Преобразование в Булеан

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("Привет!")); // true
console.log(Boolean("")); // false

// Оператор присваивания

let e,
  f = 1;
let g = 3 - (e = f + 1); // у = cамы низкий приоритет, последним считается. Т. е по усти справ налево.

console.log(e, f, g);

// Функция alert - модальное окно, мы ничего не можем на странице сделать пока не нажмем ок
alert("Hello");

// Функция promt - модальное окно для ввода каких либо данных
let age = prompt("Сколько вам лет?", 18);
console.log(age);

// Функция confirm - модальное окно с текстом вопроса. Тут есть типа результат ответ, true или false
let isCar = confirm("У тебя есть машина?");
console.log(isCar);
