function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let availableSpace = width * length * height;
    let index = 3;
    let usedSpace = 0;

    while (index < input.length) {
        let currentInput = input[index];

        if (currentInput === "Done") {
            let freeSpace = availableSpace - usedSpace;
            console.log(`${freeSpace} Cubic meters left.`);
            return;
        }

        let boxes = Number(currentInput);
        usedSpace += boxes;

        if (usedSpace > availableSpace) {
            let neededSpace = usedSpace - availableSpace;
            console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
            return;
        }

        index++;
    }

    let freeSpace = availableSpace - usedSpace;
    console.log(`${freeSpace} Cubic meters left.`);
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);