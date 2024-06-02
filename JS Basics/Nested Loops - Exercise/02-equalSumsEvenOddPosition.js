function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let evenIdxSum = 0;
        let oddIdxSum = 0;

        let curNumStr = String(curNum);

        for (let i = 0; i < curNumStr.length; i++) {
            let curDigit = Number(curNumStr[i]);

            if (i % 2 === 0) {
                oddIdxSum += curDigit;  // Нечетните позиции в индекса са четни
            } else {
                evenIdxSum += curDigit;  // Четните позиции в индекса са нечетни
            }
        }

        if (evenIdxSum === oddIdxSum) {
            result += curNumStr + ' ';
        }
    }

    if (result !== '') {
        console.log(result.trim());
    }
}

equalSumsEvenOddPosition(["100000", "100050"]);