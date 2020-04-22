// Я коментарий

import { render } from "node-sass";

/*
я
блочный
коментарий
*/

// ---------------------
// var vatiableVar;
// let variableLet;

if (true) {
	var vatiableVar = 'gloval';
	let variableLet = 'block';
	variableLet; // block
}

vatiableVar; // gloval
variableLet; // undefined

const variableLet = 'string';
variableLet = 'asdasd'; // error

// простые
'sting' // string
1 // number
true || false // boolean
null // нечего
undefined // не существует
new Symbol('a') !== new Symbol('a')  // символ
'a' === 'a'

// ссылочные
{} // обект
[] // масив
new Data(); // дата
new RegExp(); // регулярные варажения
new Error(); // ошибка

// простые
var a = 'a'; // a
var b = a; // a
b = 'b' // b
b; // b
a; // a

// ссылочные
var vasa = {
	age: 1
};
var petya = {
	age: 2
}
vasa.age; // 1
petya.age; // 2
vasa = petya;
vasa.age; // 2
petya.age = 5;
vasa.age; // 5

const ola = [1, 2, 3];
ola = [2, 3, 6]; // error
ola[0] = 5;
ola; // [5, 2, 3];

let katya = 'баба';
let lilya = 'баба';
if (true) {
	let katya = 'дура';
	katya; // дура
	lilya; // баба
	var alisa = 'тварь';
	let sveta = 1;
}
katya; // баба
alisa; // 'тварь' // undefined
sveta; // undefined

// унарные
!true; // false

// бинарные операторы
// = // присвоение
// == // проверка равенста
// === // проверка равенста с типизацией / точное равенсво
// != // отрицание равенства
// !== // строгое отрицание равенства
// % // целочисленое диление
// - // минус
// + // плюс
// '/' // деление
// * // умнажение
// && // и
// || // или

// && 

var a = null;
var b = 1;
var c = 2;
a && b; // null;

if (a || b) {

}

if (a && b) {

}

var user = a || b;
if (!!user) {
	console.log(user);
}

var error = fun(text) || fun2(text) || fun3(text);

// Тернарны оператор + Условия

if (true) {
	console.log('true')
} else {
	debugger;
	console.log('false');
}

true ? console.log('true') : console.log('false');

var a = loged ? user : unclounUser;


if (true) {
	console.log('true')
} else if (true) {
	debugger;
	console.log('false');
} else if (true) {
	debugger;
	console.log('false');
} else {

}

if (true)
	console.log('olol');

//Цыклы
function iteratorPlud (i, number) {
	return i * number;
}

for (let i=1;i<=30;i=iteratorPlud(i, 3)) {
	document.write (i+'<br />');
}

// экринарование
"вася \"дыбил\" тупой"