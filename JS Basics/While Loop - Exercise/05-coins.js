function coins(input) {
    let change = Number(input[0]) * 100;
    let coinCount = 0;
    const coinValues = [200, 100, 50, 20, 10, 5, 2, 1];

    for (let value of coinValues) {
        while (change >= value) {
            change -= value;
            coinCount++;
        }
    }

    console.log(coinCount);
}

coins(["1.23"]);