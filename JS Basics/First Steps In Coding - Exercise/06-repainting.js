function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let coat = Number(input[2]);
    let bags = 0.40;
    let workers = 30;
    let workHours = Number(input[3]);
    let totalMaterial = (nylon + 2) * 1.5 + (paint + (10 / 100 * paint)) * 14.50 + coat * 5 + bags;
    let total = totalMaterial + (totalMaterial * (workers / 100)) * workHours;

    console.log(total);
}
