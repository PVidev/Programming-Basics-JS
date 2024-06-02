function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumbers = Number(input[2]);
    let count = 0;
    let isFind = false;

    for (let x = startInterval; x <= endInterval; x++) {
        for (let y = startInterval; y <= endInterval; y++) {
            count++;
            if (x + y === magicNumbers) {
                console.log(`Combination N:${count} (${x} + ${y} = ${magicNumbers})`);
                isFind = true;
                break;
            }
        }

        if (isFind) {
            break;
        }
    }

    if (!isFind) {
        console.log(`${count} combinations - neither equals ${magicNumbers}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);