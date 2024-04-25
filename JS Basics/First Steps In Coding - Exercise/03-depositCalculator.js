function depositCalculator(input) {
    let deposit = Number(input[0]);
    let mount = Number(input[1]);
    let rate = Number(input[2]);
    let interest = deposit * (rate / 100) / 12;
    let total = deposit + (mount * interest);
    
    console.log(total);
}