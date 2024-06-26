function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commissionRate = 0;

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commissionRate = 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commissionRate = 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commissionRate = 0.08;
            } else if (sales > 10000) {
                commissionRate = 0.12;
            } else {
                console.log("error");
                return;
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commissionRate = 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commissionRate = 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commissionRate = 0.10;
            } else if (sales > 10000) {
                commissionRate = 0.13;
            } else {
                console.log("error");
                return;
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commissionRate = 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commissionRate = 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commissionRate = 0.12;
            } else if (sales > 10000) {
                commissionRate = 0.145;
            } else {
                console.log("error");
                return;
            }
            break;
        default:
            console.log("error");
            return;
    }

    let commission = sales * commissionRate;
    console.log(commission.toFixed(2));
}

tradeCommissions(["Sofia", "1500"]);
