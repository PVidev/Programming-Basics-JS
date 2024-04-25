function suppliesForSchool(input) {
    let pencilPackets = Number(input[0]);
    let markersPackets = Number(input[1]);
    let cleanerPackets = Number(input[2]);
    let discount = Number(input[3]) / 100;
    let total = pencilPackets * 5.80 + markersPackets * 7.20 + cleanerPackets * 1.20;
    let finalPrice = total - (total * discount);

    console.log(finalPrice);
}

suppliesForSchool([2, 3, 4, 25]);