function trainTheTrainers(input) {
    let judgeCount = Number(input[0]);
    
    let index = 1;
    let command = input[index];

    let totalGradeSum = 0;
    let totalGradeCount = 0;
    
    while (command !== "Finish") {
        let presentationName = command;
        let presentationGradeSum = 0;

        for (let curJudgeNum = 1; curJudgeNum <= judgeCount; curJudgeNum++) {
            index++;
            let curGrade = Number(input[index]);
            presentationGradeSum += curGrade;
        }

        let avgPresentationGrade = presentationGradeSum / judgeCount;
        console.log(`${presentationName} - ${avgPresentationGrade.toFixed(2)}.`);

        totalGradeSum += avgPresentationGrade;
        totalGradeCount++;

        index++;
        command = input[index];
    }

    let totalAvgGrade = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);