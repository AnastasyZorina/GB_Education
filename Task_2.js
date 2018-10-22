/* подсчет товаров в корзине. К домашнему заданию №3.
*/

var basket = [200, 3000, 550, 715, 110];
function countBasketPrice(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}

console.log(countBasketPrice(basket));

/* подсчет товаров в корзине. К домашнему заданию №4.
*/

var basket = [
    {
        name: "The Lacemaker",
        style: "Barocco",
        artist: "Johannes Vermeer",
        price: 5500
    },
    {
        name: "Medea",
        style: "Art Nouveau",
        artist: "Alfons Mucha",
        price: 2500
    },
    {
        name: "Olympia",
        style: "Impressionism",
        artist: "Edouard Manet",
        price: 4500
    }
];

function totalBasketPrice(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i].price;
    }
    return sum;
}

console.log(totalBasketPrice(basket));
