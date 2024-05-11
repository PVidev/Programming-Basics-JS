function numbersDivisibleBy9(input) {
    let startRange = Number(input[0]);
    let endRange = Number(input[1]);
    let sum = 0;
    let buffer = "";
    
    for (let i = startRange; i <= endRange; i++) {
        if (i % 9 === 0) {
            sum += i;
            
            if (i + 9 >= endRange) {
                buffer += i;
            } else {
                buffer += i + "\n";
            }
        }
    }
    
    console.log("The sum: " + sum);
    console.log(buffer);
}

numbersDivisibleBy9(["100", "200"]);
