// Числовой тип данных
let a = 2;
let b = 7.23;

console.log(typeof a); // typeof помогает определить тип данных

let c = 1 / 0; // будет тип infinity (бесконечность)
console.log(c);

let d = -Infinity;
console.log(d);

let inf = 1e1000;
console.log(inf);

let e = "строка" / 2; // Значение NaN примет
console.log(e);

// Cтроковые типы данных
let msg1 = "string 1";
let msg3 = `string 2`;
let x = 5,
  y = 2;
let msg2 = `x = ${x}, y = ${y}`; // только боковые кавычки позволяют делать отсылки на значения
console.log(msg2);

let ch = "1"; // в JS это также строка, не символ. Тут такого нет

let cl = 'class="myClass"'; //экранирование символов при помощи \
console.log(cl);

// Булевый тип данных
let isWin = true,
  isCheckedField = false;
let isGreater = 4 > 1;
console.log(typeof isCheckedField);
console.log(isGreater);

// Значения Null

let idProcess = null; // в целом null Это пустота, ничего

// SYMBOL уникальный идентификатор

let id = Symbol();
let id2 = Symbol("id");
console.log(id === id2);
