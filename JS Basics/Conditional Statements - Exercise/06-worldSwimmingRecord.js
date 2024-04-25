function worldSwimmingRecord(input)  {
    let recordSeconds = Number(input[0]);
    let rangeMeters = Number(input[1]);
    let metersSwam = Number(input[2]);
 
    let resistanceTime = Math.floor(rangeMeters / 15) * 12.5;
    let totalSwimTime = (rangeMeters * metersSwam) + resistanceTime;
 
    if(recordSeconds <= totalSwimTime){
        console.log(`No, he failed! He was ${(totalSwimTime - recordSeconds).toFixed(2)} seconds slower.`)
    }else{
        console.log(`Yes, he succeeded! The new world record is ${(totalSwimTime).toFixed(2)} seconds.`)
    }
 
}
 
worldSwimmingRecord(["10464", "1500", "20"]);