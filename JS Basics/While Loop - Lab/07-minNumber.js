function minNumber(input) {
    let index = 0;
    let minNum = Number.POSITIVE_INFINITY;

    while (index < input.length) {
        let currentInput = input[index];

        if (currentInput === "Stop") {
            break;
        }

        let num = Number(currentInput);

        if (num < minNum) {
            minNum = num;
        }

        index++;
    }

    console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]);