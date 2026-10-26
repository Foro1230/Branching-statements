// Завдання 1
// const age = Number(prompt("Введіть свій вік:"));
// if (age < 12) {
//   alert("Дитина");
// } else if (age < 18) {
//   alert("Підліток");
// } else if (age < 60) {
//   alert("Дорослий");
// } else {
//   alert("Пенсіонер");
// }

// Завдання 2
// const number = Number(prompt("Введіть число від 0 до 9:"));
// switch (number) {
//   case 1: alert("!"); break;
//   case 2: alert("@"); break;
//   case 3: alert("#"); break;
//   case 4: alert("$"); break;
//   case 5: alert("%"); break;
//   case 6: alert("^"); break;
//   case 7: alert("&"); break;
//   case 8: alert("*"); break;
//   case 9: alert("("); break;
//   case 0: alert(")"); break;
// }

// Завдання 3
// const number = Number(prompt("Введіть тризначне число:"));
// const hundreds = Math.floor(number / 100);
// const tens = Math.floor(number / 10) % 10;
// const units = number % 10;
// if (hundreds === tens || hundreds === units || tens === units) {
//   alert("У числі є однакові цифри");
// } else {
//   alert("У числі немає однакових цифр");
// }

// Завдання 4
// const year = Number(prompt("Введіть рік:"));
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   alert("Рік високосний");
// } else {
//   alert("Рік не високосний");
// }

// Завдання 5
// const number = prompt("Введіть п’ятирозрядне число:");
// if (number[0] === number[4] && number[1] === number[3]) {
//   alert("Число є паліндромом");
// } else {
//   alert("Число не є паліндромом");
// }

// Завдання 6
// const usd = Number(prompt("Введіть кількість USD:"));
// const currency = prompt("Оберіть валюту: EUR, UAN або AZN");
// let result;
// switch (currency) {
//   case "EUR": result = usd * 0.92; break;
//   case "UAN": result = usd * 41; break;
//   case "AZN": result = usd * 1.7; break;
//   default: alert("Такої валюти немає");
// }
// if (result !== undefined) {
//   alert(result);
// }
