function shopping(input) {
    let petarBudget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardPrice = 250 * videoCardsCount;
    let cpuPrice = (0.35 * videoCardPrice) * cpuCount;
    let ramPrice = (0.10 * videoCardPrice) * ramCount;
    let totalPrice = videoCardPrice + cpuPrice + ramPrice;

    if (videoCardsCount > cpuCount) {
        totalPrice *= 0.85;
    }

    if (petarBudget >= totalPrice) {
        let leftBudget = (petarBudget - totalPrice).toFixed(2);
        console.log(`You have ${leftBudget} leva left!`);
    } else {
        let neededMoney = (totalPrice - petarBudget).toFixed(2);
        console.log(`Not enough money! You need ${neededMoney} leva more!`);
    }
}

shopping(["920.45", "3", "1", "1"]);
