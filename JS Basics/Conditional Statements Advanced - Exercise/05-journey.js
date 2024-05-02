function journey(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination = "";
    let vacationType = "";
 
    if (budjet <= 100){
         destination = "Bulgaria"
        if (season == "summer"){
            price = budjet * 0.3;
        } else if (season == "winter"){
            price = budjet * 0.7;
        }
 
    } if (budjet > 100 && budjet <= 1000){
         destination = "Balkans"
        if(season == "summer"){
            price = budjet * 0.4;
        } else if (season == "winter"){
            price = budjet * 0.8;
        }
 
    } if ( budjet > 1000){
         destination = "Europe"
        price = budjet * 0.9
 
    } if (season == "summer" && destination !== "Europe"){
        vacationType = "Camp"
    } else if (season == "winter" || destination == "Europe"){
        vacationType = "Hotel"
    }
 
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} ${"-"} ${price.toFixed(2)}`)
}

journey(["50", "summer"]);