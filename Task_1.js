/*
Написать функцию, преобразующую число в объект. 
*/

function numberToObject (n) {
    if (n > 999) {
        console.log('Число превышает 999', {});
        return;
    } 

    if (n > 0) {
        return new Object({
            hundreds: Math.floor(n / 100 % 10),
            tens: Math.floor(n / 10 % 10),
            units: Math.floor(n % 10)
        });
    }
}

var result;

result = numberToObject(456);

console.log(result);
