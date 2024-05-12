function histogram(input) {
    let n = Number(input[0]);

    let group1Count = 0;
    let group2Count = 0;
    let group3Count = 0;
    let group4Count = 0;
    let group5Count = 0;

    for (let idx = 1; idx <= n; idx++) {
        let num = Number(input[idx]);

        if (num < 200) {
            group1Count++;
        } else if (num <= 399) {
            group2Count++;
        } else if (num <= 599) {
            group3Count++;
        } else if (num <= 799) {
            group4Count++;
        } else {
            group5Count++;
        }
    }

    let group1Percent = group1Count / n * 100;
    let group2Percent = group2Count / n * 100;
    let group3Percent = group3Count / n * 100;
    let group4Percent = group4Count / n * 100;
    let group5Percent = group5Count / n * 100;

    console.log(`${group1Percent.toFixed(2)}%`);
    console.log(`${group2Percent.toFixed(2)}%`);
    console.log(`${group3Percent.toFixed(2)}%`);
    console.log(`${group4Percent.toFixed(2)}%`);
    console.log(`${group5Percent.toFixed(2)}%`);
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);