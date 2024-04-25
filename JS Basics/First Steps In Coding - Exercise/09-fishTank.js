function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volCm = length * width * height;
    let volLiters = volCm * 0.001;
    let percentage = percent / 100;
    let totalLiters = volLiters * (1 - percentage);

    console.log(totalLiters);
}

fishTank([105, 77, 89, 18.5]);