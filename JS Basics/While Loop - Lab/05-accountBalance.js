function accountBalance(input) {
    let index = 0;
    let balance = 0;

    while (index < input.length) {
        let currentInput = input[index];

        if (currentInput === "NoMoreMoney") {
            break;
        }

        let amount = Number(currentInput);

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${amount.toFixed(2)}`);
        balance += amount;
        index++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);