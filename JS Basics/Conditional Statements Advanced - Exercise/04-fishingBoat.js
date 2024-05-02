function fishingBoat(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let numberFishermen = Number(input[2]);
 
    let price = 0;
 
    switch(season){
        case "Spring": price = 3000; break;
        case "Summer": 
        case "Autumn": price = 4200; break;
        case "Winter": price = 2600; break;
    }
 
    if(numberFishermen <= 6){
        price *= 0.9
    } else if (numberFishermen <= 11){
        price *= 0.85
    } else if (numberFishermen >= 12) {
        price *= 0.75
    }
 
    if (numberFishermen % 2 === 0 && season !== "Autumn"){
        price *= 0.95
    }
 
    if (budjet >= price){
        moneyLeft = budjet - price
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyNeeded = price - budjet
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}

fishingBoat(["3600", "Summer", "11"]);