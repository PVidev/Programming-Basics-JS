function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
 
    let totalMinExamTime = (examHour * 60) + examMinute;
    let totalMinArrivalTime = (arrivalHour * 60) + arrivalMinute;
 
    let timeDifference = totalMinArrivalTime - totalMinExamTime;
    let totalHour = Math.abs(Math.trunc(timeDifference / 60));
    let totalMinute = Math.abs(timeDifference % 60);
 
    if (timeDifference < -30) {
        console.log("Early");
    } else if (timeDifference <= 0) {
        console.log("On time");
    } else {
        console.log("Late");
    }

    if (timeDifference !== 0) {
        if (totalHour === 0) {
            console.log(`${totalMinute} minutes ${timeDifference < 0 ? 'before' : 'after'} the start`);
        } else {
            console.log(`${totalHour}:${totalMinute < 10 ? '0' : ''}${totalMinute} hours ${timeDifference < 0 ? 'before' : 'after'} the start`);
        }
    }
}

onTimeForTheExam(["9", "00", "8", "30"]);
