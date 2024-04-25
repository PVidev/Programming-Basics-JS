function time15Minutes(input) {
    let hoursNow = Number(input[0]);
    let minutesNow = Number(input[1]);

    let totalMin = hoursNow * 60 + minutesNow + 15;

    let newHour = Math.floor(totalMin / 60);
    let newMinutes = totalMin % 60;

    if (newHour === 24) {
        newHour = 0;
    }

    if (newMinutes >= 10) {
        console.log(`${newHour}:${newMinutes}`);
    } else {
        console.log(`${newHour}:0${newMinutes}`);
    }
}

time15Minutes(["23", "59"]);