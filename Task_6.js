/*
Задача 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function summary(x, y) {
  return x + y;
 }

function difference(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function mathOperation(arg1, arg2, operation) {
  switch(operation) {
    case "+":
      return summary(arg1, arg2);
      break;
    case "-":
      return difference(arg1, arg2);
      break;
    case "*":
      return multiplication(arg1, arg2);
      break;
    case "/":
      return division(arg1, arg2);
      break;
  }
}

let x = prompt("Введите первое число", '') - 0;
let y = prompt("Введите второе число", '') - 0;
let operation = prompt ("Выберите операцию (+, -, * или /)", '');

alert(mathOperation(x, y, operation));
