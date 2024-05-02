function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let totalPrice = 0;
    let nights = days - 1;
    let pricePerNight = 0;

    switch(roomType) {
        case "room for one person":
            pricePerNight = 18;
            break;
        case "apartment":
            pricePerNight = 25;
            break;
        case "president apartment":
            pricePerNight = 35;
            break;
    }

    totalPrice = nights * pricePerNight;

    if (nights < 10) {
    } else if (nights >= 10 && nights <= 15) {
        switch(roomType) {
            case "apartment":
                totalPrice *= 0.65;
                break;
            case "president apartment":
                totalPrice *= 0.85;
                break;
        }
    } else if (nights > 15) {
        switch(roomType) {
            case "apartment":
                totalPrice *= 0.5;
                break;
            case "president apartment":
                totalPrice *= 0.8;
                break;
        }
    }

    if (rating === "positive") {
        totalPrice *= 1.25;
    } else if (rating === "negative") {
        totalPrice *= 0.9; 
    }
    
    console.log(totalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);