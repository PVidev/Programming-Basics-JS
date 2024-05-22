function graduation(input) {
    let index = 0;
    let name = input[index++];
    let grade = 1;
    let totalGrades = 0;
    let excludedCount = 0;

    while (grade <= 12) {
        if (index >= input.length) {
            break;
        }

        let yearlyGrade = parseFloat(input[index++]);

        if (yearlyGrade >= 4.00) {
            totalGrades += yearlyGrade;
            grade++;
        } else {
            excludedCount++;
            if (excludedCount > 1) {
                console.log(`${name} has been excluded at ${grade} grade`);
                return;
            }
        }
    }

    let averageGrade = totalGrades / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

graduation (["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]); 