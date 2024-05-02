function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budjet = Number(input[2]);
 
    let price = 0;
 
    switch(flowerType){
        case "Roses": price = flowerCount * 5; break;
        case "Dahlias": price = flowerCount * 3.8; break;
        case "Tulips": price = flowerCount * 2.8; break;
        case "Narcissus": price = flowerCount * 3; break;
        case "Gladiolus": price = flowerCount * 2.5; break;
    }
 
    if (flowerCount > 80 && flowerType === "Roses"){
        price *= 0.9
    } else if (flowerCount > 90 && flowerType === "Dahlias"){
        price *= 0.85
    } else if (flowerCount > 80 && flowerType === "Tulips"){
        price *= 0.85
    } else if (flowerCount < 120 && flowerType === "Narcissus"){
        price *= 1.15
    } else if (flowerCount < 80 && flowerType === "Gladiolus"){
        price *= 1.2
    }
 
    if (budjet >= price){
        moneyLeft = budjet - price
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyNeeded = price - budjet
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}