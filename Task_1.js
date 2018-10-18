/* 
1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/
function primeNumber(n) {
    if(n<2) return false;
    for (var i = 2; i < n; i++) {
        if(n%i==0)
            return false;
    }
    return true;
}

var i = 0; 
while (i < 100) {
    if(primeNumber(i)) console.log(i); i++;
}
