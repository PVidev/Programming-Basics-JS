function oscars(input) {
    let actorName = input[0];
    let initialPoints = parseFloat(input[1]);
    let numEvaluators = parseInt(input[2]);
    let currentPoints = initialPoints;

    for (let i = 0; i < numEvaluators; i++) {
        let evaluatorName = input[3 + i * 2];
        let evaluatorPoints = parseFloat(input[4 + i * 2]);

        currentPoints += (evaluatorName.length * evaluatorPoints) / 2;

        if (currentPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${currentPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = 1250.5 - currentPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
