function examPreparation(input) {
    const maxPoorGrades = Number(input[0]);
    let index = 1;
    let problemCount = 0;
    let poorGradesCount = 0;
    let totalScore = 0;
    let lastProblem = "";

    while (index < input.length) {
        let problemName = input[index];
        if (problemName === "Enough") {
            break;
        }
        index++;
        let grade = Number(input[index]);
        index++;
        problemCount++;
        totalScore += grade;
        lastProblem = problemName;

        if (grade <= 4) {
            poorGradesCount++;
            if (poorGradesCount === maxPoorGrades) {
                console.log(`You need a break, ${poorGradesCount} poor grades.`);
                return;
            }
        }
    }

    let averageScore = totalScore / problemCount;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${problemCount}`);
    console.log(`Last problem: ${lastProblem}`);
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);