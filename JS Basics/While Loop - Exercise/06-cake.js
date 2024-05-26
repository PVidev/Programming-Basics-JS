function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let totalPieces = width * length;
    let index = 2;

    while (index < input.length) {
        let currentInput = input[index];

        if (currentInput === "STOP") {
            console.log(`${totalPieces} pieces are left.`);
            return;
        }

        let piecesTaken = Number(currentInput);
        totalPieces -= piecesTaken;

        if (totalPieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            return;
        }

        index++;
    }

    console.log(`${totalPieces} pieces are left.`);
}

cake(["10", "10", "20", "20", "20", "20", "21"]);