function petShop(input) {
    let dogFood = 2.5;
    let catFood = 4;
    let dogPackets = Number(input[0]);
    let catPackets = Number(input[1]);
    let totalFood = dogFood * dogPackets + catFood * catPackets;

    console.log(`${totalFood} lv.`);
}