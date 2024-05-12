function tennisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let seasonPoints = 0;
    let winCount = 0;

    for (let idx = 2; idx < input.length; idx++) {
        let result = input[idx];

        if (result === 'W') {
            seasonPoints += 2000;
            winCount++;
        } else if (result === 'F') {
            seasonPoints += 1200;
        } else {
            seasonPoints += 720;
        }
    }

    console.log(`Final points: ${startingPoints + seasonPoints}`);

    let avgPoints = seasonPoints / tournamentCount;
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    
    let percentWon = winCount / tournamentCount * 100;
    console.log(`${percentWon.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);