function cleverLily(input) {
    let age = Number(input[0])
    let washerPrice = Number(input[1])
    let precePerToy = Number(input[2])
    
    let moneySaved = 0;
    let moneyGifted = 10;

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            moneySaved += moneyGifted - 1;
            moneyGifted += 10;
        } else {
            moneySaved += precePerToy;
        }
    }

    if (moneySaved >= washerPrice) {
        console.log(`Yes! ${(moneySaved - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - moneySaved).toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"])