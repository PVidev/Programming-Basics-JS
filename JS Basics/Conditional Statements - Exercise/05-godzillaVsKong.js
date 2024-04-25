function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let clothesPricePerStatists = Number(input[2]);

    let totalClothesPrice = statistsCount * clothesPricePerStatists;
    let decorPrice = 0.1 * budget;

    if (statistsCount > 150) {
        totalClothesPrice *= 0.9;
    }

    let totalPrice = totalClothesPrice + decorPrice;

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        moneyNeeded = totalPrice - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);