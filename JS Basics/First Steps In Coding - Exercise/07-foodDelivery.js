function foodDelivery(input) {
    let chickenMenuQuantity = Number(input[0]);
    let fishMenuQuantity = Number(input[1]);
    let vegetarianMenuQuantity = Number(input[2]);
    let totalMenu = chickenMenuQuantity * 10.35 + fishMenuQuantity * 12.40 + vegetarianMenuQuantity * 8.15;
    let desertPrice = totalMenu * 0.2;
    let delivery = 2.50;
    let total = totalMenu + desertPrice + delivery;

    console.log(total);
}

foodDelivery([9, 2, 6]);