
function calculateTax (itemPrice) {
    let salesTax = itemPrice * .06;
    let localTax = itemPrice * .02;
    let federalTax = itemPrice * .07;
    let totalTax = salesTax + localTax + federalTax;
    return totalTax + itemPrice;
}

for (price = 10; price < 100; price = price + 8 ) {
    let totalPrice = calculateTax(price);
    console.log('Total price with tax on', price, ' is ', totalPrice)
}
// let price = 14.95;
// let totalPrice = calculateTax(price);
// console.log('Total price with tax on', price, ' is ', totalPrice)
//
// price = 22.95;
// totalPrice = calculateTax(price);
// console.log('Total price with tax on', price, ' is ', totalPrice)
