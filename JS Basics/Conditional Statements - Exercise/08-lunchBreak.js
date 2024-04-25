function lunchBreak(input) {
    let serialsName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = (1 / 8) * breakDuration;
    let leisureDuration = (1 / 4) * breakDuration;

    let freeTime = breakDuration - lunchDuration - leisureDuration;

    if (freeTime >= episodeDuration) {
        let timeLeft = freeTime - episodeDuration;
        console.log(`You have enough time to watch ${serialsName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        let timeNeeded = episodeDuration - freeTime;
        console.log(`You don't have enough time to watch ${serialsName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);