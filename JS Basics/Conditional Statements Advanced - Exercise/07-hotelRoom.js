function hotelRoom(input) {
    let month = input[0];
    let nightsSpent = Number(input[1]);
 
    let priceStudio = 0;
    let priceApart = 0;
 
    if (month === "May" || month === "October"){
        priceStudio = 50;
        priceApart = 65;
    } else if (month === "June" || month === "September"){
        priceStudio = 75.2;
        priceApart = 68.7;
    } else {
        priceStudio = 76;
        priceApart = 77;
    }
 
    if (nightsSpent > 7 && nightsSpent < 14){
        if (month === "May" || month === "October"){
            priceStudio *= 0.95
        }
    }
 
    if (nightsSpent > 14 ){
        if (month === "May" || month === "October"){
            priceStudio *= 0.7
        }
    }
 
    if (nightsSpent > 14){
        if (month === "June" || month === "September"){
            priceStudio *= 0.8
        }
    }
 
    if (nightsSpent > 14){
        priceApart *= 0.9
    }
 
console.log(`Apartment: ${(nightsSpent *priceApart).toFixed(2)} lv.`)
console.log(`Studio: ${(nightsSpent * priceStudio).toFixed(2)} lv.`)
 
}