function animalType(input) {
    switch (input[0]) {
        case "dog":
            console.log("mammal");
            break;
        case "snake":
        case "crocodile":
        case "tortoise":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

animalType(["cat"]);