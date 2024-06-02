function specialNumbers(input) {
    let n = Number(input[0]);
    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let isSpecial = true;
        let temp = i;

        for (let j = 0; j < 4; j++) {
            let digit = temp % 10;
            temp = Math.floor(temp / 10);

            if (digit === 0 || n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result += i + " ";
        }
    }

    console.log(result.trim());
}

specialNumbers(["3"]);