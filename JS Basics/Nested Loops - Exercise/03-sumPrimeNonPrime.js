function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];

    let sumPrimeNums = 0;
    let sumNonPrimeNums = 0;

    while (command !== 'stop') {
        let curNum = Number(command);

        if (curNum < 0) {
            console.log("Number is negative.");
            
            index++;
            command = input[index];
            
            continue;
        }

        let isPrime = true;

        if (curNum === 0 || curNum === 1) {
            isPrime = false;
        } else {
            for (let divisor = 2; divisor <= Math.sqrt(curNum); divisor++) {
                if (curNum % divisor === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            sumPrimeNums += curNum;
        } else {
            sumNonPrimeNums += curNum;
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
