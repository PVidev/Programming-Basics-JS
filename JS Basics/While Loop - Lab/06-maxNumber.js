function maxNumber(input) {
    let index = 0;
    let maxNum = Number.NEGATIVE_INFINITY;

    while (index < input.length) {
        let currentInput = input[index];

        if (currentInput === "Stop") {
            break;
        }

        let num = Number(currentInput);

        if (num > maxNum) {
            maxNum = num;
        }

        index++;
    }

    console.log(maxNum);
}

maxNumber(["100", "99", "80", "70", "Stop"]); // 100