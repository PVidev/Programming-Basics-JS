function vacation(input) {
    const moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let totalDays = 0;
    let spendDays = 0;

    while (index < input.length) {
        const action = input[index];
        const amount = Number(input[index + 1]);
        totalDays++;
        index += 2;

        if (action === "spend") {
            availableMoney -= amount;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            spendDays++;
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${totalDays}`);
                return;
            }
        } else if (action === "save") {
            availableMoney += amount;
            spendDays = 0;
        }

        if (availableMoney >= moneyNeeded) {
            console.log(`You saved the money for ${totalDays} days.`);
            return;
        }
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);