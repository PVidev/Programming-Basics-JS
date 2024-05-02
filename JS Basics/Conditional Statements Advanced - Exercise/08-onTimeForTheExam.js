function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
 
    let totalMinExamTime = (examHour * 60) + examMinute;
    let totalMinArrivalTime = (arrivalHour * 60) + arrivalMinute;
 
    let timeDifference = totalMinArrivalTime - totalMinExamTime;
    let totalHour = Math.trunc(timeDifference / 60)
    let totalMinute = Math.abs(timeDifference % 60)
 
    if (timeDifference >= -30 && timeDifference <= 0){
        console.log("On time");
    } else if (timeDifference <= -30){
        console.log("Early");
    } else if (timeDifference > 0){
        console.log("Late")
    }

    if (timeDifference < 60){
        console.log(`${totalMinute} minutes before the start`);
    } else if (timeDifference >= 60 && timeDifference < 120){
        console.log(`${totalHour} hours and ${totalMinute} minutes before the start`);
    } else if (timeDifference >= 120){
        console.log(`${totalHour} hours before the start`);
    }

}

onTimeForTheExam(["9", "00", "8", "30"]);