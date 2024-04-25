function basketballEquipment(input) {
    let tax = Number(input[0]);
    let shoes = tax * 0.6;
    let kit = shoes * 0.8;
    let ball = (1 / 4) * kit;
    let accessories = (1 / 5) * ball;
    let total = tax + shoes + kit + ball + accessories;
    
    console.log(total);
}

basketballEquipment(["365"]);