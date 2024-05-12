function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let totalPeople = 0;

    let mussalaCount = 0;
    let monblanCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 1; i <= groupCount; i++) {
        let peopleCount = Number(input[i]);
        totalPeople += peopleCount;

        if (peopleCount <= 5) {
            mussalaCount += peopleCount;
        } else if (peopleCount <= 12) {
            monblanCount += peopleCount;
        } else if (peopleCount <= 25) {
            kilimandjaroCount += peopleCount;
        } else if (peopleCount <= 40) {
            k2Count += peopleCount;
        } else {
            everestCount += peopleCount;
        }
    }

    let mussalaPercent = (mussalaCount / totalPeople) * 100;
    let monblanPercent = (monblanCount / totalPeople) * 100;
    let kilimandjaroPercent = (kilimandjaroCount / totalPeople) * 100;
    let k2Percent = (k2Count / totalPeople) * 100;
    let everestPercent = (everestCount / totalPeople) * 100;

    console.log(`${mussalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);