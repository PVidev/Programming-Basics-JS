function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = "";
    let shoes = "";

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees <= 24) {
        if (timeOfDay == "Morning" || timeOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else {
        if (timeOfDay == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeOfDay == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["22", "Afternoon"]);