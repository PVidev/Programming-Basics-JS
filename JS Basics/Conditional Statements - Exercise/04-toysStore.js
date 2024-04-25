function toyStore(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let moneyEarned = (puzzleCount * 2.6) + (dollCount * 3) + (bearCount * 4.1) + (minionCount * 8.2) + (truckCount * 2);
    let totalCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;

    if (totalCount >= 50) {
        moneyEarned *= 0.75;
    }

    moneyEarned *= 0.9;

    if (moneyEarned >= tripPrice) {
        let moneyLeft = moneyEarned - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        moneyNeeded = tripPrice - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyStore(["40.8", "20", "25", "30", "50", "10"]);