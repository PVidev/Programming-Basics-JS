function multiplicationTable(input) {
    let secondFactor = Number(input[0]);
    
    for (let firstFactor = 1; firstFactor <= 10; firstFactor++) {
        let res = firstFactor * secondFactor;
        console.log(`${firstFactor} * ${secondFactor} = ${res}`);
    }
}

multiplicationTable(["5"]);