function cinema(input) {
    let income = 0;
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    if (type === "Premiere") {
        income = rows * cols * 12;
    } else if (type === "Normal") {
        income = rows * cols * 7.50;
    } else if (type === "Discount") {
        income = rows * cols * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Normal", "21", "13"]);